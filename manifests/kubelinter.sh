#!/bin/bash

check_kubeconfig() {
    echo "Checking kube deployment..."
    docker run --rm -v $(pwd):/manifests stackrox/kube-linter lint /manifests
    if [ $? -eq 0 ]; then
        echo "deployment is valid"
    else
        echo "deployment is invalid"
        exit 1
    fi
}
check_kubeconfig