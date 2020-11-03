export default {
    name: "MieraGallery",
    title: "Miera ielas Galerija",
    type: "document",
    fields: [
        {
            name: "GalleryName",
            title: "Galerijas nosaukums",
            type: "string",
        },
        {
            name: "GalleryDate",
            title: "Galerijas datums",
            type: "date",
        },
        {
            name: "GalleryDescription",
            title: "Galerijas apraksts",
            type: "text",
        },
        {
            name: "GalleryImages",
            title: "Attēli Galerijai",
            type: "array",
            of: [{ type: "image", hotspot: true }],
        },
    ],
};
