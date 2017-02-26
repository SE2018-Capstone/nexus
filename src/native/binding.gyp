{
    "targets": [
        {
            "target_name": "NexusNative",
            "sources": ["binding.cc"]
        } 
    ],
    "include_dirs": [
        "<!(node -e \"require('nan')\")"
    ]
}
