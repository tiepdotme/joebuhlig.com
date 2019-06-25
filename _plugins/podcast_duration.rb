require 'rss'
require 'uri'

module PodcastDurationFilter
  def podcast_duration( link )
    duration = ""
    if link && (link.include? "bookworm.fm")
      feed = RSS::Parser.parse("https://bookworm.fm/feed/podcast",false)
    elsif link && (link.include? "whimsthatwork.fm")
      feed = RSS::Parser.parse("https://feeds.fireside.fm/whimsthatwork/rss", false)
    end
    if feed
      feed.items.each do |item|
        item_uri = URI.parse(item.link)
        podcast_uri = URI.parse(link)
        if item_uri.path == podcast_uri.path
          duration = "#{((item.itunes_duration.hour * 60) + item.itunes_duration.minute).to_s} min"
        end
      end
    end
    duration
  end
end

Liquid::Template.register_filter(PodcastDurationFilter)
