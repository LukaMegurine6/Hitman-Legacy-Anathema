const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const contracts = [
    
    {
        "Data": {
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "296c73bb-d858-4d4f-8a6c-392fafb410f9",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "02ee376e-5454-455b-b584-eda741a77722",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository a5b1f605-7767-4db4-a24b-a9191a10f12d).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository a5b1f605-7767-4db4-a24b-a9191a10f12d).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "a5b1f605-7767-4db4-a24b-a9191a10f12d"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "a5b1f605-7767-4db4-a24b-a9191a10f12d"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "02ee376e-5454-455b-b584-eda741a77732",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 2da5acff-0025-4814-831f-30156a4ee38f).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 2da5acff-0025-4814-831f-30156a4ee38f).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "2da5acff-0025-4814-831f-30156a4ee38f"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "2da5acff-0025-4814-831f-30156a4ee38f"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                }
            ],
            "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/coastaltown/vr_overrides_octopus.brick",
                    "assembly:/_pro/scenes/missions/coastaltown/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/coastaltown/vr_overrides_octopus.brick"
                ]
            }
        ],
            "GameDifficulties": [
                {
                    "Difficulty": "easy",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/coastaltown/difficulty_easy_sapienza_octopus.brick",
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_sazerac.brick",
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/Scenario_CorpseReviver.brick"
                    ]
                },
                {
                    "Difficulty": "normal",
                    "Bricks": [
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_sazerac.brick",
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/Scenario_CorpseReviver.brick"
                    ]
                },
                {
                    "Difficulty": "hard",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/coastaltown/octopus_pro1.brick",
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_sazerac.brick",
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/Scenario_CorpseReviver.brick"
                    ]
                }
            ],
            "Bricks": [
                "assembly:/_pro/scenes/missions/coastaltown/mission_revenge.brick"
            ],
            "GameChangers": [],
        },
        "Metadata": {
            "Title": "UI_CONTRACT_REVENGE_TITLE",
            "Description": "UI_CONTRACT_SECTERIAN_DRIFT_DESC",
            "Entitlements": [
                "H1_LEGACY_STANDARD"
            ],
            "ScenePath": "assembly:/_PRO/Scenes/Missions/CoastalTown/_scene_octopus.entity",
            "Location": "LOCATION_COASTALTOWN",
            "IsPublished": true,
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Revenge",
            "Type": "mission",
            "Subtype": "flashback",
            "Id": "96fcb143-e0bc-4d80-8a36-82205f8c681c",
            "PublicId": "137904207541",
            "TileImage": "images/Secterian.jpg",
            "GroupObjectiveDisplayOrder": [
                {
                    "Id": "89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039"
                },
                {
                    "Id": "d749b0f2-d1f0-47d5-bab9-10e3ff4dac8b"
                },
                {
                    "Id": "a5b1f605-7767-4db4-a24b-a9191a10f12d"
                }
            ],
            "CreationTimestamp": "2024-05-11T21:33:17.090Z",
            "Release": "2.00.x"
        },
        "UserData": {}
    }

    
]
module.exports = function MissionPlugin(controller) {
    contracts.forEach((contract) => {
        controller.addMission(contract)
        controller.missionsInLocations[contract.Metadata.Location].push(contract.Metadata.Id)
    })
    
    log(LogLevel.INFO, "[WOA Expansion] Welcome to the world of assassination, new contents now available !")
}
