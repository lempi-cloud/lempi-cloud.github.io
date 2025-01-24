local header_count = 0

function Header(el)
  header_count = header_count + 1
  if header_count > 1 then
    -- Prepend the number and a space to the header content
    table.insert(el.content, 1, pandoc.Space())
    table.insert(el.content, 1, pandoc.Str(header_count - 1 .. "."))
  end
  return el
end