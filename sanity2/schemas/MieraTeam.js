export default {
    name: "MieraTeam",
    title: "Miera ielas Komanda",
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
                    { value: "Vadītāja", title: "Vadītāja" },
                    { value: "Audzinātāja", title: "Audzinātāja" },
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
