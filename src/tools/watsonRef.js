const credentials = {
  "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
  "username": "f26ec927-b4a8-4020-aaac-fcdf8df4df6e",
  "password": "V1FYHUEY6aPa"
}

cf cups Personality-Insights-Std -p "\"f26ec927-b4a8-4020-aaac-fcdf8df4df6e\":\"V1FYHUEY6aPa\""


curl --user "f26ec927-b4a8-4020-aaac-fcdf8df4df6e":"V1FYHUEY6aPa" \
--header "Content-Type: application/json" \
--data  "{\"text\": \"Hi Team, I know the times are difficult! Our sales have been disappointing for the past three quarters for our data analytics product suite. We have a competitive data analytics product suite in the industry. But we need to do our job selling it! \"}" \
"https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19"

// Limit the results to see only the "emotion" tone by including the tones parameter set to emotion:
curl --user "{username}":"{password}" \
--header "Content-Type: application/json" \
--data "{\"text\": \"Hi Team, I know the times are difficult! Our sales have been disappointing for the past three quarters for our data analytics product suite. We have a competitive data analytics product suite in the industry. But we need to do our job selling it! \"}" \
"https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19&tones=emotion"


// sentence to false to analyze full content
curl --user "{username}":"{password}" \
--header "Content-Type: application/json" \
--data  "{\"text\": \"Hi Team, I know the times are difficult! Our sales have been disappointing for the past three quarters for our data analytics product suite. We have a competitive data analytics product suite in the industry. But we need to do our job selling it! \"}" \
"https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19&sentences=false"

