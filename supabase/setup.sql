-- Run this in the Supabase SQL editor for your project.

-- 1. RSVPs table
create table if not exists rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  companion_name text,
  invitation_type text,
  attending boolean not null,
  guest_count int not null default 1,
  note text,
  created_at timestamptz not null default now()
);

-- Keep an existing RSVP table compatible when this setup is rerun.
alter table rsvps add column if not exists companion_name text;
alter table rsvps add column if not exists invitation_type text;

alter table rsvps drop constraint if exists rsvps_invitation_type_check;
alter table rsvps add constraint rsvps_invitation_type_check
  check (invitation_type is null or invitation_type in ('individual', 'plus-one', 'couple'));

alter table rsvps drop constraint if exists rsvps_guest_limit_check;
alter table rsvps add constraint rsvps_guest_limit_check check (
  invitation_type is null
  or (not attending and guest_count = 0)
  or (attending and invitation_type = 'individual' and guest_count = 1)
  or (attending and invitation_type in ('plus-one', 'couple') and guest_count between 1 and 2)
);

alter table rsvps drop constraint if exists rsvps_companion_name_check;
alter table rsvps add constraint rsvps_companion_name_check check (
  invitation_type is null
  or guest_count <> 2
  or nullif(trim(companion_name), '') is not null
);

alter table rsvps enable row level security;

create policy "Anyone can submit an RSVP"
  on rsvps for insert
  to anon
  with check (true);

-- No select policy for anon: guests cannot read each other's RSVPs.
-- Use the Supabase dashboard Table Editor (as project owner) to view responses.
