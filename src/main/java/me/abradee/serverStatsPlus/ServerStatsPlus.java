package me.abradee.serverStatsPlus;

import org.bukkit.plugin.java.JavaPlugin;

public final class ServerStatsPlus extends JavaPlugin {

    @Override
    public void onEnable() {
        saveDefaultConfig();
        getLogger().info("JoinLeavePlus is initializing...");
        getServer().getPluginManager().registerEvents(new JoinLeaveListener(), this);
        getCommand("about-joinleaveplus").setExecutor(new AboutCommand());
        getLogger().info("The plugin has started.");
        getLogger().info("Feel free to donate through https://patreon.com/abradee");
    }

    @Override
    public void onDisable() {
        // Plugin shutdown logic
    }
}
