export interface Project {
  id: number;
  name: string;
  identifier: string;
  parent: Parent | null;
  child_project: Project[];
  description: string;
  created_on: string;
  updated_on: string;
  is_public: boolean;
  status: number;
  inherit_members: boolean;
  enable_new_ticket_message: number;
  new_ticket_message: number | null;
}

export interface Parent {
  id: number;
  name: string;
}
