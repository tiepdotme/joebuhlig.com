module AmazonFilter
  # Checks if the post contains amazon affiliate links
  def has_amazon(input)
    input =~ /(https:\/\/amzn.to|tag=joebuhlig-20|amazon.com\/shop\/joebuhlig)/i ? true : false
  end

  Liquid::Template.register_filter self
end
