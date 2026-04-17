export type Note = {
  id: string;
  user_id: string;
  title: string | null;
  content: string;
  category: string | null;
  is_pinned: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export type NoteCategory = {
  id: string;
  user_id: string;
  name: string;
  color: string;
  created_at: string;
};

export type User = {
  id: string;
  email: string;
  created_at: string;
};
