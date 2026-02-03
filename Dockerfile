FROM ruby:3.2

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
    cmake \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy Gemfile
COPY Gemfile ./

# Install webrick manually as it's removed in Ruby 3+ but needed by Jekyll 3.9
RUN gem install webrick

# Install gems
RUN bundle install

# Copy source
COPY . .

# Expose port
EXPOSE 4000

# Start server
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"]
