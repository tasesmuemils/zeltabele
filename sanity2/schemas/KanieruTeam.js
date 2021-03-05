export default {
    name: "KanieruTeam",
    title: "Kaņiera ielas Komanda",
    type: "document",
    fields: [
        {
            name: "TeamMemberName",
            title: "Vārds Uzvārds",
            type: "string",
        },
        {
            name: "TeamMemberPosition",
            title: "Amats",
            type: "string",
            options: {
                list: [
                    {
                        title: "Valdes locekle, Vadītāja",
                        value: "Valdes locekle, Vadītāja",
                    },
                    { title: "Valdes locekle", value: "Valdes locekle" },
                    { title: "Vadītāja", value: "Vadītāja" },
                    { title: "Skolotāja", value: "Skolotāja" },
                ],
            },
        },
        {
            name: "TeamMemberDescription",
            title: "Darbinieka apraksts",
            type: "text",
        },
        {
            name: "TeamMemberEducation",
            title: "Darbinieka izglītība",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "TeamMemberImage",
            title: "Darbinieka foto",
            type: "image",
            options: {
                hotspot: true,
            },
        },
    ],
};
