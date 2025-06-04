-- Create the articles table in Supabase
-- You can run this SQL in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS articles (
  _id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  source TEXT NOT NULL,
  url TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  summary TEXT NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_articles_source ON articles(source);
CREATE INDEX IF NOT EXISTS idx_articles_created_at ON articles("createdAt" DESC);
CREATE INDEX IF NOT EXISTS idx_articles_url ON articles(url);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow read access (adjust as needed for your security requirements)
CREATE POLICY "Allow read access to articles" ON articles
  FOR SELECT USING (true);

-- Create a policy to allow insert/update (adjust as needed)
CREATE POLICY "Allow insert/update access to articles" ON articles
  FOR ALL USING (true);

-- Create a function to automatically update the updatedAt timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updatedAt" = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updatedAt
CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
