/*
  # Create contacts table for HenoBuild website

  ## Description
  This migration creates a contacts table to store all contact form submissions
  from the HenoBuild website.

  ## New Tables
  1. `contacts`
    - `id` (uuid, primary key) - Unique identifier for each submission
    - `name` (text, not null) - Full name of the person contacting
    - `email` (text, not null) - Email address for response
    - `phone` (text, nullable) - Optional phone number
    - `project_type` (text, nullable) - Type of project (web, mobile, desktop, cybersecurity)
    - `message` (text, not null) - The message content
    - `created_at` (timestamptz) - Timestamp of submission
    - `status` (text) - Status of the contact (new, in_progress, completed)

  ## Security
  - Enable RLS on contacts table
  - No public read access (only admin can read)
  - Allow public insert (for contact form submissions)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  project_type text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);