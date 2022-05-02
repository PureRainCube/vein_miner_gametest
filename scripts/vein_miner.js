import {
    BlockLocation, world
}
    from "mojang-minecraft";
const overworld = world.getDimension("overworld");
const listen_world = world.events;
 
function vein_miner_function(id, x, y, z) {
    overworld.runCommand("say Run_Vein_Miner_GameTest");
    if (overworld.getBlock(new BlockLocation(x, y, z + 1)).id == id) {
        overworld.runCommand("setblock " + x + " " + y + " " + (z + 1) + " " + "air 0 destroy");
        vein_miner_function(id, x, y, z + 1);
    }
    if (overworld.getBlock(new BlockLocation(x, y + 1, z)).id == id) {
        overworld.runCommand("setblock " + x + " " + (y + 1) + " " + z + " " + "air 0 destroy");
        vein_miner_function(id, x, y + 1, z);
    }
    if (overworld.getBlock(new BlockLocation(x, y - 1, z + 1)).id == id) {
        overworld.runCommand("setblock " + x + " " + (y - 1) + " " + z + " " + "air 0 destroy");
        vein_miner_function(id, x, y - 1, z);
    }
    if (overworld.getBlock(new BlockLocation(x, y, z - 1)).id == id) {
        overworld.runCommand("setblock " + x + " " + y + " " + (z - 1) + " " + "air 0 destroy");
        vein_miner_function(id, x, y, z - 1);
    }
    if (overworld.getBlock(new BlockLocation(x + 1, y, z)).id == id) {
        overworld.runCommand("setblock " + (x + 1) + " " + y + " " + z + " " + "air 0 destroy");
        vein_miner_function(id, x + 1, y, z);
    }
    if (overworld.getBlock(new BlockLocation(x - 1, y, z)).id == id) {
        overworld.runCommand("setblock " + (x - 1) + " " + y + " " + z + " " + "air 0 destroy");
        vein_miner_function(id, x - 1, y, z);
    }
}
 
listen_world.blockBreak.subscribe(block_func => {
    var blockId, x, y, z
    blockId = block_func.brokenBlockPermutation.type.id;
    x = block_func.block.location.x;
    y = block_func.block.location.y;
    z = block_func.block.location.z;
    
    if (blockId == "minecrft:emerald_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:iron_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:copper_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:coal_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:gold_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:lapis_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:redstone_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:diamond_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecrft:deepslate_emerald_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:deepslate_iron_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:deepslate_copper_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:deepslate_coal_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:deepslate_gold_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:deepslate_lapis_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:deepslate_redstone_ore") {
        vein_miner_function(blockId, x, y, z);
    } else if (blockId == "minecraft:deepslate_diamond_ore") {
        vein_miner_function(blockId, x, y, z);
    };
    overworld.runCommand("say Has_Been_Destroyed_blockId:" + blockId)
});