if [ -d build ]; then
    git switch main
    cp -rf build/* ./
    git switch src
else 
    echo "build folder not found, run 'npm run build'"
fi