if [ -z $CURIO_RPC_ENDPOINT ]; then
    echo "CURIO_RPC_ENDPOINT env is not set"
    exit 1
fi

enpoint = $CURIO_RPC_ENDPOINT
curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' $CURIO_RPC_ENDPOINT > curio.json