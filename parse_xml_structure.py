#!/usr/bin/env python3
"""
Parse WordPress XML to extract complete site structure
"""
import xml.etree.ElementTree as ET
import json
import html

def parse_xml_structure():
    xml_file = "../welcometopioneerengineeringservices.WordPress.2025-11-02.xml"
    
    tree = ET.parse(xml_file)
    root = tree.getroot()
    
    # Namespace
    namespaces = {
        'content': 'http://purl.org/rss/1.0/modules/content/',
        'wp': 'http://wordpress.org/export/1.2/'
    }
    
    pages = []
    products = []
    facilities = []
    testimonials = []
    menu_items = []
    
    for item in root.findall('.//item'):
        post_type = item.find('wp:post_type', namespaces)
        if post_type is None:
            continue
        post_type_text = post_type.text
        
        title_elem = item.find('title')
        title = title_elem.text if title_elem is not None else ''
        
        link_elem = item.find('link')
        link = link_elem.text if link_elem is not None else ''
        
        content_elem = item.find('content:encoded', namespaces)
        content = content_elem.text if content_elem is not None and content_elem.text else ''
        
        post_id = item.find('wp:post_id', namespaces)
        post_id_text = post_id.text if post_id is not None else ''
        
        post_name = item.find('wp:post_name', namespaces)
        post_name_text = post_name.text if post_name is not None else ''
        
        if post_type_text == 'page':
            pages.append({
                'id': post_id_text,
                'title': title,
                'slug': post_name_text,
                'link': link,
                'content': html.unescape(content) if content else ''
            })
        elif post_type_text == 'product':
            products.append({
                'id': post_id_text,
                'title': title,
                'slug': post_name_text,
                'link': link,
                'content': html.unescape(content) if content else ''
            })
        elif post_type_text == 'facilitie':
            facilities.append({
                'id': post_id_text,
                'title': title,
                'slug': post_name_text,
                'link': link,
                'content': html.unescape(content) if content else ''
            })
        elif post_type_text == 'client-testimonial':
            testimonials.append({
                'id': post_id_text,
                'title': title,
                'slug': post_name_text,
                'link': link,
                'content': html.unescape(content) if content else ''
            })
        elif post_type_text == 'nav_menu_item':
            menu_items.append({
                'id': post_id_text,
                'title': title,
                'link': link
            })
    
    structure = {
        'pages': pages,
        'products': products,
        'facilities': facilities,
        'testimonials': testimonials,
        'menu_items': menu_items
    }
    
    # Save to JSON
    with open('site_structure.json', 'w', encoding='utf-8') as f:
        json.dump(structure, f, indent=2, ensure_ascii=False)
    
    print(f"✓ Parsed structure:")
    print(f"  Pages: {len(pages)}")
    print(f"  Products: {len(products)}")
    print(f"  Facilities: {len(facilities)}")
    print(f"  Testimonials: {len(testimonials)}")
    print(f"  Menu Items: {len(menu_items)}")
    
    # Print page titles
    print("\nPages:")
    for page in pages:
        print(f"  - {page['title']} ({page['slug']})")
    
    print("\nProducts:")
    for product in products:
        print(f"  - {product['title']} ({product['slug']})")
    
    return structure

if __name__ == "__main__":
    parse_xml_structure()

