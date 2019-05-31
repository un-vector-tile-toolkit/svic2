task :default do
  sh "hjson -j data.hjson > data.json"
  sh "parcel build --out-dir docs --public-url . index.html"
end

