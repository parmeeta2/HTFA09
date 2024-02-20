-- Static Data for Segmentation Analysis
-- Only verified purchase reviews
-- Filtered by top 100,000 reviews (as determined by total votes)
-- Columns = customer_id, product_id
-- PK = customer_id

-- create music_segment table
CREATE TABLE "music_segment" (
    "customer_id" int,
    "music" int,
    CONSTRAINT "pk_music_segment" PRIMARY KEY (
        "customer_id"
     )
);

-- create video_games_segment table
CREATE TABLE "video_games_segment" (
    "customer_id" int,
    "video_games" int,
    CONSTRAINT "pk_video_games_segment" PRIMARY KEY (
        "customer_id"
     )
);

-- create videos_segment table
CREATE TABLE "videos_segment" (
    "customer_id" int,
    "videos_segment" int,
    CONSTRAINT "pk_videos_segment" PRIMARY KEY (
        "customer_id"
     )
);
