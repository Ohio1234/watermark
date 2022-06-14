local userId = nil
RegisterNetEvent("V1N:reciveUserId", function(id)
    userId = id
end)

Citizen.CreateThread(function()
    TriggerServerEvent("V1N:getUserId")

    while true do
        Citizen.Wait(500)

        local playerCounts = 0

        for i = 0, 255 do
            if NetworkIsPlayerActive(i) then
                playerCounts = playerCounts+1
            end
        end

        TriggerServerEvent("V1N:getUserId")

        SendNUIMessage({
            playerCount = playerCounts,
            userId = userId
        })
    end
end)