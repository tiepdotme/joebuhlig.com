# Outputs the reading time

# Read this in “about 4 minutes”
# Put into your _plugins dir in your Jekyll site
# Usage: Read this in about {{ page.content | reading_time }}

module ReadingTimeFilter
  def reading_time( content )
		words_per_minute = 200
    words = content.split.size;
    minutes = ( words / words_per_minute ).floor
    minutes > 0 ? "#{minutes} min" : "> 1 min"
  end
end

Liquid::Template.register_filter(ReadingTimeFilter)
