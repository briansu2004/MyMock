@rem

@cls

@rem mockoon-cli start -l localhost --data ./github_user_data.json

@rem mockoon-cli start -d pilot-routes.json -p 8384 -i 

@rem mockoon-cli start -l localhost -d github_user_data.json -p 8384 -i 

mockoon-cli start --data api_export.json
