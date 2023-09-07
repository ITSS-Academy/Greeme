// export interface CreateProjectDto {

//     "name": string,
//     "identifier": string,
//     "description": string,
//     "homepage": string,
//     "is_public": boolean,
//     "parent_id": number,
//     "inherit_members": boolean,
//     "tracker_ids": number[],
//     "enabled_module_names": string[],
//     // "custom_field_values":{
//     //    "1":string
//     // }
// }

export class CreateProjectDto {
    name: string;
    identifier: string;
    description: string;
    homepage: string;
    is_public: boolean;
    parent_id: number;
    inherit_members: boolean;
    tracker_ids: number[];
    enabled_module_names: string[];
    custom_field_values:any;
}


// "project":{
//     "name":"Example name",
//     "identifier":"example_name",
//     "description":"Description of exapmple project",
//     "is_public":false,
//     "parent_id":1,
//     "inherit_members":false,
//     "tracker_ids":[
//        1,
//        2,
//        3,
//        4,
//        5
//     ],
//     "enabled_module_names":[
//        "issue_tracking" 
//     ],
//     "custom_field_values":{
//        "1":"VALUE" 
//     }
//  }