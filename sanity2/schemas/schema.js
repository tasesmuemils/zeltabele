// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import homePage from "./homePage";

import KanieruGallery from "./KanieruGallery";
import KanieruStudyPlans from "./KanieruStudyPlans";
import MieraAbout from "./MieraAbout";
import MieraStudyPlans from "./MieraStudyPlans";
import MieraGallery from "./MieraGallery";
import MieraContacts from "./MieraContacts";
import KanieruTeam from "./KanieruTeam";
import MieraTeam from "./MieraTeam";
import KanieruContacts from "./KanieruContacts";

import month from "./month";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.

        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        blockContent,
        homePage,
        MieraAbout,
        MieraStudyPlans,
        MieraGallery,
        MieraTeam,
        MieraContacts,
        KanieruStudyPlans,
        KanieruGallery,
        KanieruTeam,
        KanieruContacts,
        month,
    ]),
});
