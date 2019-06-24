# Outputs the reading time

# Read this in “about 4 minutes”
# Put into your _plugins dir in your Jekyll site
# Usage: Read this in about {{ page.content | reading_time }}

module ReadingTimeFilter
  def reading_time( content, post )
		words_per_minute = 200
    if post.categories == 'blog'
      words = content.split.size;
      minutes = ( words / words_per_minute ).floor
      minutes_label = minutes === 1 ? " min" : " mins"
      minutes > 0 ? "#{minutes} #{minutes_label}" : "> 1 min"
    else if post.categories == 'bookworm'
      
    else if post.categories == 'whims'

    else

    end
	end
end

Liquid::Template.register_filter(ReadingTimeFilter)
