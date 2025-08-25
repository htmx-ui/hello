# Qwen CLI Compatibility Test

This file tests that the Qwen CLI can still access organized documentation.

## Test Commands

1. `qwen search "accordion"` - Should find accordion-related documentation
2. `qwen read "accordion"` - Should read accordion documentation
3. `qwen list` - Should list available documentation files

## Notes

All documentation files have been organized into logical directories while maintaining:
- Full compatibility with Qwen CLI
- Proper Markdown formatting
- Logical categorization
- Easy navigation

The organization structure:
```
docs/
├── guides/
├── references/
├── cheatsheets/
└── cli/
```

This keeps the project root clean while ensuring all documentation remains accessible to both users and the Qwen CLI.