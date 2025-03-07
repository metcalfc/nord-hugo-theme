# Makefile for Nord Hugo Theme

# Variables
HUGO_SITE_DIR := exampleSite
PUBLIC_DIR := $(HUGO_SITE_DIR)/public
RESOURCES_DIR := $(HUGO_SITE_DIR)/resources
HUGO_CACHE_DIR := $(HUGO_SITE_DIR)/.hugo_build.lock

.PHONY: clean build serve

# Build the example site
build:
	cd $(HUGO_SITE_DIR) && hugo

# Serve the example site locally
serve:
	cd $(HUGO_SITE_DIR) && hugo server

# Clean up generated files
clean:
	rm -rf $(PUBLIC_DIR)
	rm -rf $(RESOURCES_DIR)
	rm -f $(HUGO_CACHE_DIR)
	find . -name "*.DS_Store" -type f -delete
	find . -name "*~" -type f -delete
	@echo "Cleaned up generated files and directories."

# Full rebuild - clean and then build
rebuild: clean build
