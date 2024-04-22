#!/bin/bash
VERSION="1.83.1.23"

curl https://wakfu.cdn.ankama.com/gamedata/config.json > ./files/version.json
curl https://wakfu.cdn.ankama.com/gamedata/$VERSION/items.json > ./files/items.json
curl https://wakfu.cdn.ankama.com/gamedata/$VERSION/actions.json > ./files/actions.json
curl https://wakfu.cdn.ankama.com/gamedata/$VERSION/equipmentItemTypes.json > ./files/equipmentItemTypes.json
curl https://wakfu.cdn.ankama.com/gamedata/$VERSION/itemProperties.json > ./files/itemProperties.json