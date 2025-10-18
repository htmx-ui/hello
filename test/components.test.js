const fs = require('fs');
const path = require('path');

describe('Component Library Tests', () => {
  const componentsDir = path.join(__dirname, '../src/pages/components');
  const componentFiles = fs
    .readdirSync(componentsDir)
    .filter(file => file.endsWith('.html'));

  test('All component files exist', () => {
    expect(componentFiles.length).toBeGreaterThan(40); // Should have at least 40 components
  });

  componentFiles
    .filter(
      file =>
        file !== 'index.html' &&
        file !== 'template.html' &&
        !file.includes('toast.html')
    )
    .forEach(file => {
      test(`${file} has valid HTML structure`, () => {
        const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
        expect(content).toContain('<div class="my-8 w-full min-w-0">'); // Standard component wrapper
        expect(content).toContain(
          '<h1 class="scroll-m-20 text-3xl font-bold tracking-tight">'
        ); // Title
      });
    });

  test('Index file exists and loads components', () => {
    const indexPath = path.join(componentsDir, 'index.html');
    expect(fs.existsSync(indexPath)).toBe(true);
    const content = fs.readFileSync(indexPath, 'utf8');
    expect(content).toContain('Components'); // Should list components
  });
});

describe('Asset Tests', () => {
  test('CSS files exist', () => {
    expect(fs.existsSync('src/assets/css/tailwindcss.css')).toBe(true);
    expect(fs.existsSync('src/assets/css/animate.min.css')).toBe(true);
  });

  test('JS libraries exist', () => {
    expect(fs.existsSync('src/assets/js/htmx.js')).toBe(true);
    expect(fs.existsSync('src/assets/js/hyperscript.js')).toBe(true);
  });

  test('Main index.html loads correctly', () => {
    const content = fs.readFileSync('src/index.html', 'utf8');
    expect(content).toContain('hx-get="/partials/navbar.html"');
    expect(content).toContain('hx-get="/pages/home/index.html"');
  });
});

describe('Documentation Tests', () => {
  test('README exists and has key sections', () => {
    const readme = fs.readFileSync('README.md', 'utf8');
    expect(readme).toContain('Hello UI');
    expect(readme).toContain('HTMX + Hyperscript + TailwindCSS');
    expect(readme).toContain('✅ Production Ready');
  });

  test('Documentation files exist', () => {
    expect(fs.existsSync('docs/references/DOCS.md')).toBe(true);
    expect(fs.existsSync('docs/guides/COMPONENT_DEVELOPMENT_GUIDE.md')).toBe(
      true
    );
  });
});
