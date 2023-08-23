import os

def concatenate_js_files(root_directory, output_file):
    with open(output_file, 'w') as outfile:
        for subdir, _, files in os.walk(root_directory):
            for file in files:
                if file.endswith('.js'):
                    filepath = os.path.join(subdir, file)
                    outfile.write(f"===== {filepath} =====\n")
                    with open(filepath, 'r') as infile:
                        content = infile.read()
                        outfile.write(content)
                        outfile.write("\n\n")

root_directory = './wildlife/src'
output_file = 'all_js_files.txt'

concatenate_js_files(root_directory, output_file)