json.array! @people.each do |person|
  json.id person.id
  json.name person.name
  json.bio person.bio
  json.bioVisible true
  json.avatar_url rails_blob_url(person.avatar) if person.avatar.attachment
end
