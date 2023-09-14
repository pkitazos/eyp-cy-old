import os
import sys

def snake_to_camel(word):
    components = word.split('-')
    return components[0] + ''.join(x.title() for x in components[1:])

def generate_ts_for_directory(directory_path, child_exports={}):
    files = [f for f in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, f)) and f != 'index.ts']
    image_files = [f for f in files if f.endswith(('.png', '.jpeg', '.jpg'))]
    
    imports = []
    exports = []

    for image_file in image_files:
        base_name = os.path.splitext(image_file)[0]
        camel_case_name = snake_to_camel(base_name)
        imports.append(f'import {camel_case_name} from "./{image_file}";')
        exports.append(camel_case_name)
    
    with open(os.path.join(directory_path, 'index.ts'), 'w') as f:
        for imp in imports:
            f.write(imp + '\n')
        
        f.write('\n')
        
        if exports:
            f.write('export { ' + ', '.join(exports) + ' };\n')
        
        for subdir, subdir_exports in child_exports.items():
            f.write(f'export {{ {", ".join(subdir_exports)} }} from "./{subdir}";\n')

    return {directory_path.split('/')[-1]: exports}

def process_directory(directory_path):
    subdirs = [d for d in os.listdir(directory_path) if os.path.isdir(os.path.join(directory_path, d))]
    all_exports = {}
    
    for subdir in subdirs:
        child_exports = process_directory(os.path.join(directory_path, subdir))
        all_exports.update(child_exports)
    
    exports = generate_ts_for_directory(directory_path, all_exports)
    return exports

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python my-script.py [directory_path]")
        sys.exit(1)

    directory_path = sys.argv[1]
    process_directory(directory_path)
