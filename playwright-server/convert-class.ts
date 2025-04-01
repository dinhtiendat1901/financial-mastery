function formatClassesForQuerySelector(inputClasses: string): string {
    // Split the string into individual classes
    const classes = inputClasses.split(' ');

    // Filter out special classes (those containing ':', '[', or ']')
    const filteredClasses = classes.filter(cls =>
        !cls.includes(':') && !cls.includes('[') && !cls.includes(']') && !cls.includes('/')
    );

    // Join the remaining classes with dots and add a leading dot
    const formattedClasses = '.' + filteredClasses.join('.');

    // Wrap the formatted classes in document.querySelectorAll()
    return `document.querySelectorAll('${formattedClasses}')`;
}

// Example usage
const input = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-brand bg-primary-brand/5 hover:bg-primary-brand/5 hover:text-accent-foreground max-md:h-12 h-10 rounded-md border-2 border-primary-border p-0 w-10 cursor-pointer";
const result = formatClassesForQuerySelector(input);
console.log(result);
// Output: document.querySelectorAll('.space-y-4.py-4.border-b.border-primary-second.border-opacity-15.pb-3')
