#!/usr/bin/env python3
"""
Script to download and organize images from WordPress XML export
"""
import os
import re
import requests
from pathlib import Path
from urllib.parse import urlparse
import time

# Configuration
XML_FILE = "../welcometopioneerengineeringservices.WordPress.2025-11-02.xml"
OUTPUT_DIR = "public/images"
DOWNLOAD_INTERVAL = 0.5  # seconds between downloads to be respectful

# Create output directories
Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)
Path(f"{OUTPUT_DIR}/banners").mkdir(exist_ok=True)
Path(f"{OUTPUT_DIR}/products").mkdir(exist_ok=True)
Path(f"{OUTPUT_DIR}/facilities").mkdir(exist_ok=True)
Path(f"{OUTPUT_DIR}/testimonials").mkdir(exist_ok=True)
Path(f"{OUTPUT_DIR}/certifications").mkdir(exist_ok=True)
Path(f"{OUTPUT_DIR}/other").mkdir(exist_ok=True)

def categorize_image(filename):
    """Categorize images based on filename"""
    filename_lower = filename.lower()
    
    if 'banner' in filename_lower:
        return 'banners'
    elif 'product' in filename_lower or 'prod' in filename_lower:
        return 'products'
    elif any(word in filename_lower for word in ['melting', 'furnace', 'shot', 'blasting', 'pattern', 'machining', 'heat', 'treatment', 'felting']):
        return 'facilities'
    elif 'testimonial' in filename_lower or 'holcim' in filename_lower or 'cement' in filename_lower or 'metso' in filename_lower or 'tata' in filename_lower or 'jk-' in filename_lower or 'aditya' in filename_lower:
        return 'testimonials'
    elif 'certificate' in filename_lower or 'iso' in filename_lower or 'ped' in filename_lower or 'norsok' in filename_lower or 'crisil' in filename_lower:
        return 'certifications'
    else:
        return 'other'

def download_image(url, category, filename):
    """Download an image from URL"""
    try:
        response = requests.get(url, timeout=10, stream=True)
        response.raise_for_status()
        
        filepath = f"{OUTPUT_DIR}/{category}/{filename}"
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"✓ Downloaded: {filename} -> {category}/{filename}")
        return True
    except Exception as e:
        print(f"✗ Failed to download {filename}: {str(e)}")
        return False

def main():
    print("Reading XML file...")
    with open(XML_FILE, 'r', encoding='utf-8') as f:
        xml_content = f.read()
    
    # Find all image URLs
    pattern = r'https://www\.pesindia\.com/wp-content/uploads/([^"<>\s]+\.(jpg|jpeg|png|gif))'
    matches = re.findall(pattern, xml_content, re.IGNORECASE)
    
    # Create unique set of URLs
    unique_urls = {}
    for full_path, ext in matches:
        if full_path not in unique_urls:
            unique_urls[full_path] = ext
    
    print(f"\nFound {len(unique_urls)} unique images to download\n")
    
    # Download each image
    downloaded = 0
    skipped = 0
    failed = 0
    
    for url_path, ext in unique_urls.items():
        full_url = f"https://www.pesindia.com/wp-content/uploads/{url_path}"
        filename = os.path.basename(url_path)
        
        # Check if already exists
        category = categorize_image(filename)
        filepath = f"{OUTPUT_DIR}/{category}/{filename}"
        if os.path.exists(filepath):
            print(f"⊘ Skipped (exists): {filename}")
            skipped += 1
            continue
        
        # Download the image
        if download_image(full_url, category, filename):
            downloaded += 1
        else:
            failed += 1
        
        # Be respectful - delay between downloads
        time.sleep(DOWNLOAD_INTERVAL)
    
    print(f"\n{'='*60}")
    print(f"Download Summary:")
    print(f"  Total images found: {len(unique_urls)}")
    print(f"  Downloaded: {downloaded}")
    print(f"  Skipped (already exist): {skipped}")
    print(f"  Failed: {failed}")
    print(f"{'='*60}")
    print(f"\nImages organized in: {OUTPUT_DIR}/")
    print(f"  - banners/")
    print(f"  - products/")
    print(f"  - facilities/")
    print(f"  - testimonials/")
    print(f"  - certifications/")
    print(f"  - other/\n")

if __name__ == "__main__":
    main()

