local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")

vRP = Proxy.getInterface("vRP")

RegisterServerEvent("V1N:getUserId", function()
    local source = source
    local user_id = vRP.getUserId({source})

    TriggerClientEvent("V1N:reciveUserId", source, user_id)
end)