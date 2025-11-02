#!/usr/bin/env python3
"""
Script to create image mapping JSON after images are downloaded
"""
import os
import json
from pathlib import Path

# Configuration
IMAGES_DIR = "public/images"
OUTPUT_FILE = "app/image-mapping.json"

# Mapping categories to sections
SECTION_MAPPING = {
    'banners': ['hero', 'header'],
    'products': ['products', 'cement', 'mining', 'power', 'pumps', 'chemical'],
    'facilities': ['facilities', 'manufacturing'],
    'testimonials': ['testimonials', 'clients'],
    'certifications': ['certifications', 'iso', 'awards'],
    'other': ['general']
}

def get_images_by_category():
    """Get all images organized by category"""
    categories = {}
    
    if not os.path.exists(IMAGES_DIR):
        print(f"Images directory not found: {IMAGES_DIR}")
        return categories
    
    for category in os.listdir(IMAGES_DIR):
        category_path = os.path.join(IMAGES_DIR, category)
        if os.path.isdir(category_path):
            images = []
            for filename in os.listdir(category_path):
                if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
                    images.append({
                        'name': filename,
                        'path': f'/images/{category}/{filename}',
                        'type': 'image'
                    })
            categories[category] = images
    
    return categories

def create_image_mapping():
    """Create mapping file for Next.js to use"""
    categories = get_images_by_category()
    
    # Create mapping structure
    mapping = {
        'banners': [],
        'products': [],
        'facilities': [],
        'testimonials': [],
        'certifications': [],
        'all': []
    }
    
    # Organize images
    for category, images in categories.items():
        if category in mapping:
            mapping[category] = images
            mapping['all'].extend(images)
    
    # Save to JSON
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(mapping, f, indent=2)
    
    print(f"✓ Generated image mapping: {OUTPUT_FILE}")
    print(f"  Categories: {list(categories.keys())}")
    for category, images in mapping.items():
        if images:
            print(f"  {category}: {len(images)} images")
    
    return mapping

if __name__ == "__main__":
    create_image_mapping()

