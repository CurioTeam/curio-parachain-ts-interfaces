set -e

usage="Usage: ./publish.sh -m \"commit message\""

if [[ ! -d build ]]; then
    echo "build/ folder not found, run 'npm run build'"
    exit 1
elif [[ "$1" != "-m" || -z "$2" ]]; then
    echo $usage
    exit 1
fi

git switch main
git checkout src build/
git checkout src package.json
git restore --staged .
cp -rf build/* ./
rm -rf build/

if [[ -z "$(git status -s)" ]]; then
    echo "no changes to publish"
    exit 1
fi

git add interfaces/ index* package.json
git commit -m "$2"

GREEN='\033[0;32m'
NC='\033[0m' # No Color
echo -e "${GREEN}+ Changes committed and ready to be pushed${NC}"