{
    "targets": [
        {
            "target_name": "NexusNative",
            "sources": [
                "binding.cc",
                "functions.cc",
                "mac_helpers.mm"
            ],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ]
        },
    ]
}
