echo '#!/bin/sh
npx --no -- commitlint --edit "$1"' > .git/hooks/commit-msg