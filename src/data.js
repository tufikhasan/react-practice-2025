const data = [
    {
        id: crypto.randomUUID(),
        title: "Complete project documentation",
        description: "Write comprehensive documentation for the new feature",
        tags: ['Documentation'],
        favorite: true,
        priority: "High"
    },
    {
        id: crypto.randomUUID(),
        title: "Review pull requests",
        description: "Review and merge pending pull requests from the team",
        tags: ['Development'],
        favorite: false,
        priority: "Low"
    },
    {
        id: crypto.randomUUID(),
        title: "Update design system",
        description: "Update color palette and typography in design system",
        tags: ['Design'],
        favorite: true,
        priority: "Medium"
    },
    {
        id: crypto.randomUUID(),
        title: "Client meeting preparation",
        description: "Prepare presentation slides for upcoming client meeting",
        tags: ['Business'],
        favorite: false,
        priority: "High"
    },
];

export default data;