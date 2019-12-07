//Generated class. Do not modify.

const print = function(obj){
    java.lang.System.out.println(obj ? String(obj) : "null")
}

const extend = function(classType, name, params){
    return new JavaAdapter(classType, params, name)
}

const Core = Packages.io.anuke.arc.Core
const Boolc = Packages.io.anuke.arc.func.Boolc
const Boolf = Packages.io.anuke.arc.func.Boolf
const Boolf2 = Packages.io.anuke.arc.func.Boolf2
const Boolp = Packages.io.anuke.arc.func.Boolp
const Cons = Packages.io.anuke.arc.func.Cons
const Cons2 = Packages.io.anuke.arc.func.Cons2
const Floatc = Packages.io.anuke.arc.func.Floatc
const Floatc2 = Packages.io.anuke.arc.func.Floatc2
const Floatc4 = Packages.io.anuke.arc.func.Floatc4
const Floatf = Packages.io.anuke.arc.func.Floatf
const Floatp = Packages.io.anuke.arc.func.Floatp
const Func = Packages.io.anuke.arc.func.Func
const Func2 = Packages.io.anuke.arc.func.Func2
const Func3 = Packages.io.anuke.arc.func.Func3
const Intc = Packages.io.anuke.arc.func.Intc
const Intc2 = Packages.io.anuke.arc.func.Intc2
const Intc4 = Packages.io.anuke.arc.func.Intc4
const Intf = Packages.io.anuke.arc.func.Intf
const Intp = Packages.io.anuke.arc.func.Intp
const Prov = Packages.io.anuke.arc.func.Prov
const Draw = Packages.io.anuke.arc.graphics.g2d.Draw
const TextureAtlas = Packages.io.anuke.arc.graphics.g2d.TextureAtlas
const TextureRegion = Packages.io.anuke.arc.graphics.g2d.TextureRegion
const Time = Packages.io.anuke.arc.util.Time
const Vars = Packages.io.anuke.mindustry.Vars
const BlockIndexer = Packages.io.anuke.mindustry.ai.BlockIndexer
const Pathfinder = Packages.io.anuke.mindustry.ai.Pathfinder
const WaveSpawner = Packages.io.anuke.mindustry.ai.WaveSpawner
const Blocks = Packages.io.anuke.mindustry.content.Blocks
const Bullets = Packages.io.anuke.mindustry.content.Bullets
const Fx = Packages.io.anuke.mindustry.content.Fx
const Items = Packages.io.anuke.mindustry.content.Items
const Liquids = Packages.io.anuke.mindustry.content.Liquids
const Loadouts = Packages.io.anuke.mindustry.content.Loadouts
const Mechs = Packages.io.anuke.mindustry.content.Mechs
const StatusEffects = Packages.io.anuke.mindustry.content.StatusEffects
const TechTree = Packages.io.anuke.mindustry.content.TechTree
const TypeIDs = Packages.io.anuke.mindustry.content.TypeIDs
const UnitTypes = Packages.io.anuke.mindustry.content.UnitTypes
const Zones = Packages.io.anuke.mindustry.content.Zones
const ContentLoader = Packages.io.anuke.mindustry.core.ContentLoader
const Control = Packages.io.anuke.mindustry.core.Control
const FileTree = Packages.io.anuke.mindustry.core.FileTree
const GameState = Packages.io.anuke.mindustry.core.GameState
const Logic = Packages.io.anuke.mindustry.core.Logic
const Platform = Packages.io.anuke.mindustry.core.Platform
const Renderer = Packages.io.anuke.mindustry.core.Renderer
const UI = Packages.io.anuke.mindustry.core.UI
const Version = Packages.io.anuke.mindustry.core.Version
const World = Packages.io.anuke.mindustry.core.World
const Content = Packages.io.anuke.mindustry.ctype.Content
const ContentList = Packages.io.anuke.mindustry.ctype.ContentList
const MappableContent = Packages.io.anuke.mindustry.ctype.MappableContent
const UnlockableContent = Packages.io.anuke.mindustry.ctype.UnlockableContent
const DrawOperation = Packages.io.anuke.mindustry.editor.DrawOperation
const EditorTile = Packages.io.anuke.mindustry.editor.EditorTile
const EditorTool = Packages.io.anuke.mindustry.editor.EditorTool
const MapEditor = Packages.io.anuke.mindustry.editor.MapEditor
const MapRenderer = Packages.io.anuke.mindustry.editor.MapRenderer
const OperationStack = Packages.io.anuke.mindustry.editor.OperationStack
const Damage = Packages.io.anuke.mindustry.entities.Damage
const Effects = Packages.io.anuke.mindustry.entities.Effects
const Entities = Packages.io.anuke.mindustry.entities.Entities
const EntityCollisions = Packages.io.anuke.mindustry.entities.EntityCollisions
const EntityGroup = Packages.io.anuke.mindustry.entities.EntityGroup
const Predict = Packages.io.anuke.mindustry.entities.Predict
const TargetPriority = Packages.io.anuke.mindustry.entities.TargetPriority
const Units = Packages.io.anuke.mindustry.entities.Units
const ArtilleryBulletType = Packages.io.anuke.mindustry.entities.bullet.ArtilleryBulletType
const BasicBulletType = Packages.io.anuke.mindustry.entities.bullet.BasicBulletType
const BombBulletType = Packages.io.anuke.mindustry.entities.bullet.BombBulletType
const BulletType = Packages.io.anuke.mindustry.entities.bullet.BulletType
const FlakBulletType = Packages.io.anuke.mindustry.entities.bullet.FlakBulletType
const HealBulletType = Packages.io.anuke.mindustry.entities.bullet.HealBulletType
const LiquidBulletType = Packages.io.anuke.mindustry.entities.bullet.LiquidBulletType
const MassDriverBolt = Packages.io.anuke.mindustry.entities.bullet.MassDriverBolt
const MissileBulletType = Packages.io.anuke.mindustry.entities.bullet.MissileBulletType
const Decal = Packages.io.anuke.mindustry.entities.effect.Decal
const Fire = Packages.io.anuke.mindustry.entities.effect.Fire
const GroundEffectEntity = Packages.io.anuke.mindustry.entities.effect.GroundEffectEntity
const ItemTransfer = Packages.io.anuke.mindustry.entities.effect.ItemTransfer
const Lightning = Packages.io.anuke.mindustry.entities.effect.Lightning
const Puddle = Packages.io.anuke.mindustry.entities.effect.Puddle
const RubbleDecal = Packages.io.anuke.mindustry.entities.effect.RubbleDecal
const ScorchDecal = Packages.io.anuke.mindustry.entities.effect.ScorchDecal
const AbsorbTrait = Packages.io.anuke.mindustry.entities.traits.AbsorbTrait
const BelowLiquidTrait = Packages.io.anuke.mindustry.entities.traits.BelowLiquidTrait
const BuilderMinerTrait = Packages.io.anuke.mindustry.entities.traits.BuilderMinerTrait
const BuilderTrait = Packages.io.anuke.mindustry.entities.traits.BuilderTrait
const DamageTrait = Packages.io.anuke.mindustry.entities.traits.DamageTrait
const DrawTrait = Packages.io.anuke.mindustry.entities.traits.DrawTrait
const Entity = Packages.io.anuke.mindustry.entities.traits.Entity
const HealthTrait = Packages.io.anuke.mindustry.entities.traits.HealthTrait
const KillerTrait = Packages.io.anuke.mindustry.entities.traits.KillerTrait
const MinerTrait = Packages.io.anuke.mindustry.entities.traits.MinerTrait
const MoveTrait = Packages.io.anuke.mindustry.entities.traits.MoveTrait
const SaveTrait = Packages.io.anuke.mindustry.entities.traits.SaveTrait
const Saveable = Packages.io.anuke.mindustry.entities.traits.Saveable
const ScaleTrait = Packages.io.anuke.mindustry.entities.traits.ScaleTrait
const ShooterTrait = Packages.io.anuke.mindustry.entities.traits.ShooterTrait
const SolidTrait = Packages.io.anuke.mindustry.entities.traits.SolidTrait
const SpawnerTrait = Packages.io.anuke.mindustry.entities.traits.SpawnerTrait
const SyncTrait = Packages.io.anuke.mindustry.entities.traits.SyncTrait
const TargetTrait = Packages.io.anuke.mindustry.entities.traits.TargetTrait
const TeamTrait = Packages.io.anuke.mindustry.entities.traits.TeamTrait
const TimeTrait = Packages.io.anuke.mindustry.entities.traits.TimeTrait
const TypeTrait = Packages.io.anuke.mindustry.entities.traits.TypeTrait
const VelocityTrait = Packages.io.anuke.mindustry.entities.traits.VelocityTrait
const BaseEntity = Packages.io.anuke.mindustry.entities.type.BaseEntity
const BaseUnit = Packages.io.anuke.mindustry.entities.type.BaseUnit
const Bullet = Packages.io.anuke.mindustry.entities.type.Bullet
const DestructibleEntity = Packages.io.anuke.mindustry.entities.type.DestructibleEntity
const EffectEntity = Packages.io.anuke.mindustry.entities.type.EffectEntity
const Player = Packages.io.anuke.mindustry.entities.type.Player
const SolidEntity = Packages.io.anuke.mindustry.entities.type.SolidEntity
const TileEntity = Packages.io.anuke.mindustry.entities.type.TileEntity
const TimedEntity = Packages.io.anuke.mindustry.entities.type.TimedEntity
const Unit = Packages.io.anuke.mindustry.entities.type.Unit
const BaseDrone = Packages.io.anuke.mindustry.entities.type.base.BaseDrone
const BuilderDrone = Packages.io.anuke.mindustry.entities.type.base.BuilderDrone
const Crawler = Packages.io.anuke.mindustry.entities.type.base.Crawler
const Dagger = Packages.io.anuke.mindustry.entities.type.base.Dagger
const Draug = Packages.io.anuke.mindustry.entities.type.base.Draug
const Eruptor = Packages.io.anuke.mindustry.entities.type.base.Eruptor
const FlyingUnit = Packages.io.anuke.mindustry.entities.type.base.FlyingUnit
const Fortress = Packages.io.anuke.mindustry.entities.type.base.Fortress
const Ghoul = Packages.io.anuke.mindustry.entities.type.base.Ghoul
const GroundUnit = Packages.io.anuke.mindustry.entities.type.base.GroundUnit
const MinerDrone = Packages.io.anuke.mindustry.entities.type.base.MinerDrone
const Phantom = Packages.io.anuke.mindustry.entities.type.base.Phantom
const RepairDrone = Packages.io.anuke.mindustry.entities.type.base.RepairDrone
const Revenant = Packages.io.anuke.mindustry.entities.type.base.Revenant
const Spirit = Packages.io.anuke.mindustry.entities.type.base.Spirit
const Titan = Packages.io.anuke.mindustry.entities.type.base.Titan
const Wraith = Packages.io.anuke.mindustry.entities.type.base.Wraith
const StateMachine = Packages.io.anuke.mindustry.entities.units.StateMachine
const Statuses = Packages.io.anuke.mindustry.entities.units.Statuses
const UnitCommand = Packages.io.anuke.mindustry.entities.units.UnitCommand
const UnitDrops = Packages.io.anuke.mindustry.entities.units.UnitDrops
const UnitState = Packages.io.anuke.mindustry.entities.units.UnitState
const DefaultWaves = Packages.io.anuke.mindustry.game.DefaultWaves
const Difficulty = Packages.io.anuke.mindustry.game.Difficulty
const EventType = Packages.io.anuke.mindustry.game.EventType
const Gamemode = Packages.io.anuke.mindustry.game.Gamemode
const GlobalData = Packages.io.anuke.mindustry.game.GlobalData
const LoopControl = Packages.io.anuke.mindustry.game.LoopControl
const MusicControl = Packages.io.anuke.mindustry.game.MusicControl
const Objective = Packages.io.anuke.mindustry.game.Objective
const Objectives = Packages.io.anuke.mindustry.game.Objectives
const Rules = Packages.io.anuke.mindustry.game.Rules
const Saves = Packages.io.anuke.mindustry.game.Saves
const Schematic = Packages.io.anuke.mindustry.game.Schematic
const Schematics = Packages.io.anuke.mindustry.game.Schematics
const SoundLoop = Packages.io.anuke.mindustry.game.SoundLoop
const SpawnGroup = Packages.io.anuke.mindustry.game.SpawnGroup
const Stats = Packages.io.anuke.mindustry.game.Stats
const Team = Packages.io.anuke.mindustry.game.Team
const Teams = Packages.io.anuke.mindustry.game.Teams
const Tutorial = Packages.io.anuke.mindustry.game.Tutorial
const BlockRenderer = Packages.io.anuke.mindustry.graphics.BlockRenderer
const Bloom = Packages.io.anuke.mindustry.graphics.Bloom
const CacheLayer = Packages.io.anuke.mindustry.graphics.CacheLayer
const Drawf = Packages.io.anuke.mindustry.graphics.Drawf
const FloorRenderer = Packages.io.anuke.mindustry.graphics.FloorRenderer
const IndexedRenderer = Packages.io.anuke.mindustry.graphics.IndexedRenderer
const Layer = Packages.io.anuke.mindustry.graphics.Layer
const LightRenderer = Packages.io.anuke.mindustry.graphics.LightRenderer
const MenuRenderer = Packages.io.anuke.mindustry.graphics.MenuRenderer
const MinimapRenderer = Packages.io.anuke.mindustry.graphics.MinimapRenderer
const MultiPacker = Packages.io.anuke.mindustry.graphics.MultiPacker
const OverlayRenderer = Packages.io.anuke.mindustry.graphics.OverlayRenderer
const Pal = Packages.io.anuke.mindustry.graphics.Pal
const Pixelator = Packages.io.anuke.mindustry.graphics.Pixelator
const Shaders = Packages.io.anuke.mindustry.graphics.Shaders
const Binding = Packages.io.anuke.mindustry.input.Binding
const DesktopInput = Packages.io.anuke.mindustry.input.DesktopInput
const InputHandler = Packages.io.anuke.mindustry.input.InputHandler
const MobileInput = Packages.io.anuke.mindustry.input.MobileInput
const PlaceMode = Packages.io.anuke.mindustry.input.PlaceMode
const Placement = Packages.io.anuke.mindustry.input.Placement
const Map = Packages.io.anuke.mindustry.maps.Map
const Maps = Packages.io.anuke.mindustry.maps.Maps
const BlendFilter = Packages.io.anuke.mindustry.maps.filters.BlendFilter
const ClearFilter = Packages.io.anuke.mindustry.maps.filters.ClearFilter
const DistortFilter = Packages.io.anuke.mindustry.maps.filters.DistortFilter
const FilterOption = Packages.io.anuke.mindustry.maps.filters.FilterOption
const GenerateFilter = Packages.io.anuke.mindustry.maps.filters.GenerateFilter
const MedianFilter = Packages.io.anuke.mindustry.maps.filters.MedianFilter
const MirrorFilter = Packages.io.anuke.mindustry.maps.filters.MirrorFilter
const NoiseFilter = Packages.io.anuke.mindustry.maps.filters.NoiseFilter
const OreFilter = Packages.io.anuke.mindustry.maps.filters.OreFilter
const OreMedianFilter = Packages.io.anuke.mindustry.maps.filters.OreMedianFilter
const RiverNoiseFilter = Packages.io.anuke.mindustry.maps.filters.RiverNoiseFilter
const ScatterFilter = Packages.io.anuke.mindustry.maps.filters.ScatterFilter
const TerrainFilter = Packages.io.anuke.mindustry.maps.filters.TerrainFilter
const BasicGenerator = Packages.io.anuke.mindustry.maps.generators.BasicGenerator
const Generator = Packages.io.anuke.mindustry.maps.generators.Generator
const MapGenerator = Packages.io.anuke.mindustry.maps.generators.MapGenerator
const RandomGenerator = Packages.io.anuke.mindustry.maps.generators.RandomGenerator
const DesertWastesGenerator = Packages.io.anuke.mindustry.maps.zonegen.DesertWastesGenerator
const OvergrowthGenerator = Packages.io.anuke.mindustry.maps.zonegen.OvergrowthGenerator
const Category = Packages.io.anuke.mindustry.type.Category
const ContentType = Packages.io.anuke.mindustry.type.ContentType
const Item = Packages.io.anuke.mindustry.type.Item
const ItemStack = Packages.io.anuke.mindustry.type.ItemStack
const ItemType = Packages.io.anuke.mindustry.type.ItemType
const Liquid = Packages.io.anuke.mindustry.type.Liquid
const LiquidStack = Packages.io.anuke.mindustry.type.LiquidStack
const Mech = Packages.io.anuke.mindustry.type.Mech
const Publishable = Packages.io.anuke.mindustry.type.Publishable
const StatusEffect = Packages.io.anuke.mindustry.type.StatusEffect
const TypeID = Packages.io.anuke.mindustry.type.TypeID
const UnitType = Packages.io.anuke.mindustry.type.UnitType
const Weapon = Packages.io.anuke.mindustry.type.Weapon
const WeatherEvent = Packages.io.anuke.mindustry.type.WeatherEvent
const Zone = Packages.io.anuke.mindustry.type.Zone
const Cicon = Packages.io.anuke.mindustry.ui.Cicon
const ContentDisplay = Packages.io.anuke.mindustry.ui.ContentDisplay
const Fonts = Packages.io.anuke.mindustry.ui.Fonts
const IconSize = Packages.io.anuke.mindustry.ui.IconSize
const IntFormat = Packages.io.anuke.mindustry.ui.IntFormat
const Links = Packages.io.anuke.mindustry.ui.Links
const Styles = Packages.io.anuke.mindustry.ui.Styles
const BlockConfigFragment = Packages.io.anuke.mindustry.ui.fragments.BlockConfigFragment
const BlockInventoryFragment = Packages.io.anuke.mindustry.ui.fragments.BlockInventoryFragment
const FadeInFragment = Packages.io.anuke.mindustry.ui.fragments.FadeInFragment
const Fragment = Packages.io.anuke.mindustry.ui.fragments.Fragment
const HudFragment = Packages.io.anuke.mindustry.ui.fragments.HudFragment
const LoadingFragment = Packages.io.anuke.mindustry.ui.fragments.LoadingFragment
const MenuFragment = Packages.io.anuke.mindustry.ui.fragments.MenuFragment
const OverlayFragment = Packages.io.anuke.mindustry.ui.fragments.OverlayFragment
const PlacementFragment = Packages.io.anuke.mindustry.ui.fragments.PlacementFragment
const PlayerListFragment = Packages.io.anuke.mindustry.ui.fragments.PlayerListFragment
const BranchTreeLayout = Packages.io.anuke.mindustry.ui.layout.BranchTreeLayout
const RadialTreeLayout = Packages.io.anuke.mindustry.ui.layout.RadialTreeLayout
const TreeLayout = Packages.io.anuke.mindustry.ui.layout.TreeLayout
const Block = Packages.io.anuke.mindustry.world.Block
const BlockStorage = Packages.io.anuke.mindustry.world.BlockStorage
const Build = Packages.io.anuke.mindustry.world.Build
const CachedTile = Packages.io.anuke.mindustry.world.CachedTile
const DirectionalItemBuffer = Packages.io.anuke.mindustry.world.DirectionalItemBuffer
const Edges = Packages.io.anuke.mindustry.world.Edges
const ItemBuffer = Packages.io.anuke.mindustry.world.ItemBuffer
const LegacyColorMapper = Packages.io.anuke.mindustry.world.LegacyColorMapper
const Pos = Packages.io.anuke.mindustry.world.Pos
const StaticTree = Packages.io.anuke.mindustry.world.StaticTree
const Tile = Packages.io.anuke.mindustry.world.Tile
const WorldContext = Packages.io.anuke.mindustry.world.WorldContext
const Attributes = Packages.io.anuke.mindustry.world.blocks.Attributes
const Autotiler = Packages.io.anuke.mindustry.world.blocks.Autotiler
const BlockPart = Packages.io.anuke.mindustry.world.blocks.BlockPart
const BuildBlock = Packages.io.anuke.mindustry.world.blocks.BuildBlock
const DoubleOverlayFloor = Packages.io.anuke.mindustry.world.blocks.DoubleOverlayFloor
const Floor = Packages.io.anuke.mindustry.world.blocks.Floor
const ItemSelection = Packages.io.anuke.mindustry.world.blocks.ItemSelection
const LiquidBlock = Packages.io.anuke.mindustry.world.blocks.LiquidBlock
const OreBlock = Packages.io.anuke.mindustry.world.blocks.OreBlock
const OverlayFloor = Packages.io.anuke.mindustry.world.blocks.OverlayFloor
const PowerBlock = Packages.io.anuke.mindustry.world.blocks.PowerBlock
const RespawnBlock = Packages.io.anuke.mindustry.world.blocks.RespawnBlock
const Rock = Packages.io.anuke.mindustry.world.blocks.Rock
const StaticWall = Packages.io.anuke.mindustry.world.blocks.StaticWall
const TreeBlock = Packages.io.anuke.mindustry.world.blocks.TreeBlock
const DeflectorWall = Packages.io.anuke.mindustry.world.blocks.defense.DeflectorWall
const Door = Packages.io.anuke.mindustry.world.blocks.defense.Door
const ForceProjector = Packages.io.anuke.mindustry.world.blocks.defense.ForceProjector
const MendProjector = Packages.io.anuke.mindustry.world.blocks.defense.MendProjector
const OverdriveProjector = Packages.io.anuke.mindustry.world.blocks.defense.OverdriveProjector
const ShockMine = Packages.io.anuke.mindustry.world.blocks.defense.ShockMine
const SurgeWall = Packages.io.anuke.mindustry.world.blocks.defense.SurgeWall
const Wall = Packages.io.anuke.mindustry.world.blocks.defense.Wall
const ArtilleryTurret = Packages.io.anuke.mindustry.world.blocks.defense.turrets.ArtilleryTurret
const BurstTurret = Packages.io.anuke.mindustry.world.blocks.defense.turrets.BurstTurret
const ChargeTurret = Packages.io.anuke.mindustry.world.blocks.defense.turrets.ChargeTurret
const CooledTurret = Packages.io.anuke.mindustry.world.blocks.defense.turrets.CooledTurret
const DoubleTurret = Packages.io.anuke.mindustry.world.blocks.defense.turrets.DoubleTurret
const ItemTurret = Packages.io.anuke.mindustry.world.blocks.defense.turrets.ItemTurret
const LaserTurret = Packages.io.anuke.mindustry.world.blocks.defense.turrets.LaserTurret
const LiquidTurret = Packages.io.anuke.mindustry.world.blocks.defense.turrets.LiquidTurret
const PowerTurret = Packages.io.anuke.mindustry.world.blocks.defense.turrets.PowerTurret
const Turret = Packages.io.anuke.mindustry.world.blocks.defense.turrets.Turret
const ArmoredConveyor = Packages.io.anuke.mindustry.world.blocks.distribution.ArmoredConveyor
const BufferedItemBridge = Packages.io.anuke.mindustry.world.blocks.distribution.BufferedItemBridge
const Conveyor = Packages.io.anuke.mindustry.world.blocks.distribution.Conveyor
const ExtendingItemBridge = Packages.io.anuke.mindustry.world.blocks.distribution.ExtendingItemBridge
const ItemBridge = Packages.io.anuke.mindustry.world.blocks.distribution.ItemBridge
const Junction = Packages.io.anuke.mindustry.world.blocks.distribution.Junction
const MassDriver = Packages.io.anuke.mindustry.world.blocks.distribution.MassDriver
const OverflowGate = Packages.io.anuke.mindustry.world.blocks.distribution.OverflowGate
const Router = Packages.io.anuke.mindustry.world.blocks.distribution.Router
const Sorter = Packages.io.anuke.mindustry.world.blocks.distribution.Sorter
const ArmoredConduit = Packages.io.anuke.mindustry.world.blocks.liquid.ArmoredConduit
const Conduit = Packages.io.anuke.mindustry.world.blocks.liquid.Conduit
const LiquidBridge = Packages.io.anuke.mindustry.world.blocks.liquid.LiquidBridge
const LiquidExtendingBridge = Packages.io.anuke.mindustry.world.blocks.liquid.LiquidExtendingBridge
const LiquidJunction = Packages.io.anuke.mindustry.world.blocks.liquid.LiquidJunction
const LiquidOverflowGate = Packages.io.anuke.mindustry.world.blocks.liquid.LiquidOverflowGate
const LiquidRouter = Packages.io.anuke.mindustry.world.blocks.liquid.LiquidRouter
const LiquidTank = Packages.io.anuke.mindustry.world.blocks.liquid.LiquidTank
const LogicBlock = Packages.io.anuke.mindustry.world.blocks.logic.LogicBlock
const MessageBlock = Packages.io.anuke.mindustry.world.blocks.logic.MessageBlock
const Battery = Packages.io.anuke.mindustry.world.blocks.power.Battery
const BurnerGenerator = Packages.io.anuke.mindustry.world.blocks.power.BurnerGenerator
const ConditionalConsumePower = Packages.io.anuke.mindustry.world.blocks.power.ConditionalConsumePower
const DecayGenerator = Packages.io.anuke.mindustry.world.blocks.power.DecayGenerator
const ImpactReactor = Packages.io.anuke.mindustry.world.blocks.power.ImpactReactor
const ItemLiquidGenerator = Packages.io.anuke.mindustry.world.blocks.power.ItemLiquidGenerator
const LightBlock = Packages.io.anuke.mindustry.world.blocks.power.LightBlock
const NuclearReactor = Packages.io.anuke.mindustry.world.blocks.power.NuclearReactor
const PowerDiode = Packages.io.anuke.mindustry.world.blocks.power.PowerDiode
const PowerDistributor = Packages.io.anuke.mindustry.world.blocks.power.PowerDistributor
const PowerGenerator = Packages.io.anuke.mindustry.world.blocks.power.PowerGenerator
const PowerGraph = Packages.io.anuke.mindustry.world.blocks.power.PowerGraph
const PowerNode = Packages.io.anuke.mindustry.world.blocks.power.PowerNode
const SingleTypeGenerator = Packages.io.anuke.mindustry.world.blocks.power.SingleTypeGenerator
const SolarGenerator = Packages.io.anuke.mindustry.world.blocks.power.SolarGenerator
const ThermalGenerator = Packages.io.anuke.mindustry.world.blocks.power.ThermalGenerator
const Cultivator = Packages.io.anuke.mindustry.world.blocks.production.Cultivator
const Drill = Packages.io.anuke.mindustry.world.blocks.production.Drill
const Fracker = Packages.io.anuke.mindustry.world.blocks.production.Fracker
const GenericCrafter = Packages.io.anuke.mindustry.world.blocks.production.GenericCrafter
const GenericSmelter = Packages.io.anuke.mindustry.world.blocks.production.GenericSmelter
const Incinerator = Packages.io.anuke.mindustry.world.blocks.production.Incinerator
const LiquidConverter = Packages.io.anuke.mindustry.world.blocks.production.LiquidConverter
const Pump = Packages.io.anuke.mindustry.world.blocks.production.Pump
const Separator = Packages.io.anuke.mindustry.world.blocks.production.Separator
const SolidPump = Packages.io.anuke.mindustry.world.blocks.production.SolidPump
const ItemSource = Packages.io.anuke.mindustry.world.blocks.sandbox.ItemSource
const ItemVoid = Packages.io.anuke.mindustry.world.blocks.sandbox.ItemVoid
const LiquidSource = Packages.io.anuke.mindustry.world.blocks.sandbox.LiquidSource
const PowerSource = Packages.io.anuke.mindustry.world.blocks.sandbox.PowerSource
const PowerVoid = Packages.io.anuke.mindustry.world.blocks.sandbox.PowerVoid
const CoreBlock = Packages.io.anuke.mindustry.world.blocks.storage.CoreBlock
const LaunchPad = Packages.io.anuke.mindustry.world.blocks.storage.LaunchPad
const StorageBlock = Packages.io.anuke.mindustry.world.blocks.storage.StorageBlock
const Unloader = Packages.io.anuke.mindustry.world.blocks.storage.Unloader
const Vault = Packages.io.anuke.mindustry.world.blocks.storage.Vault
const CommandCenter = Packages.io.anuke.mindustry.world.blocks.units.CommandCenter
const MechPad = Packages.io.anuke.mindustry.world.blocks.units.MechPad
const RallyPoint = Packages.io.anuke.mindustry.world.blocks.units.RallyPoint
const RepairPoint = Packages.io.anuke.mindustry.world.blocks.units.RepairPoint
const UnitFactory = Packages.io.anuke.mindustry.world.blocks.units.UnitFactory
const Consume = Packages.io.anuke.mindustry.world.consumers.Consume
const ConsumeItemFilter = Packages.io.anuke.mindustry.world.consumers.ConsumeItemFilter
const ConsumeItems = Packages.io.anuke.mindustry.world.consumers.ConsumeItems
const ConsumeLiquid = Packages.io.anuke.mindustry.world.consumers.ConsumeLiquid
const ConsumeLiquidBase = Packages.io.anuke.mindustry.world.consumers.ConsumeLiquidBase
const ConsumeLiquidFilter = Packages.io.anuke.mindustry.world.consumers.ConsumeLiquidFilter
const ConsumePower = Packages.io.anuke.mindustry.world.consumers.ConsumePower
const ConsumeType = Packages.io.anuke.mindustry.world.consumers.ConsumeType
const Consumers = Packages.io.anuke.mindustry.world.consumers.Consumers
const Attribute = Packages.io.anuke.mindustry.world.meta.Attribute
const BlockBars = Packages.io.anuke.mindustry.world.meta.BlockBars
const BlockFlag = Packages.io.anuke.mindustry.world.meta.BlockFlag
const BlockGroup = Packages.io.anuke.mindustry.world.meta.BlockGroup
const BlockStat = Packages.io.anuke.mindustry.world.meta.BlockStat
const BlockStats = Packages.io.anuke.mindustry.world.meta.BlockStats
const BuildVisibility = Packages.io.anuke.mindustry.world.meta.BuildVisibility
const PowerType = Packages.io.anuke.mindustry.world.meta.PowerType
const Producers = Packages.io.anuke.mindustry.world.meta.Producers
const StatCategory = Packages.io.anuke.mindustry.world.meta.StatCategory
const StatUnit = Packages.io.anuke.mindustry.world.meta.StatUnit
const StatValue = Packages.io.anuke.mindustry.world.meta.StatValue
const AmmoListValue = Packages.io.anuke.mindustry.world.meta.values.AmmoListValue
const BooleanValue = Packages.io.anuke.mindustry.world.meta.values.BooleanValue
const BoosterListValue = Packages.io.anuke.mindustry.world.meta.values.BoosterListValue
const ItemFilterValue = Packages.io.anuke.mindustry.world.meta.values.ItemFilterValue
const ItemListValue = Packages.io.anuke.mindustry.world.meta.values.ItemListValue
const LiquidFilterValue = Packages.io.anuke.mindustry.world.meta.values.LiquidFilterValue
const LiquidValue = Packages.io.anuke.mindustry.world.meta.values.LiquidValue
const NumberValue = Packages.io.anuke.mindustry.world.meta.values.NumberValue
const StringValue = Packages.io.anuke.mindustry.world.meta.values.StringValue
const BlockModule = Packages.io.anuke.mindustry.world.modules.BlockModule
const ConsumeModule = Packages.io.anuke.mindustry.world.modules.ConsumeModule
const ItemModule = Packages.io.anuke.mindustry.world.modules.ItemModule
const LiquidModule = Packages.io.anuke.mindustry.world.modules.LiquidModule
const PowerModule = Packages.io.anuke.mindustry.world.modules.PowerModule
const Produce = Packages.io.anuke.mindustry.world.producers.Produce
const ProduceItem = Packages.io.anuke.mindustry.world.producers.ProduceItem
const PrintStream = Packages.java.io.PrintStream
const System = Packages.java.lang.System
