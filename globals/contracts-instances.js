module.exports = (artifacts) => {

    return {
        MetaCoin:   artifacts.require("MetaCoin"),
        HelloWorld: artifacts.require("HelloWorld"),
        Box:        artifacts.require("Box"),
        Basic:      artifacts.require("Basic"),
    }
}