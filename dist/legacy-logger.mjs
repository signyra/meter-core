import"./chunk-C4F6RPWQ.mjs";import{TypedEmitter as y}from"tiny-typed-emitter";var u=(r=>(r[r.InitEnv=1]="InitEnv",r[r.PhaseTransition=2]="PhaseTransition",r[r.NewPC=3]="NewPC",r[r.NewNpc=4]="NewNpc",r[r.Death=5]="Death",r[r.SkillStart=6]="SkillStart",r[r.SkillStage=7]="SkillStage",r[r.Damage=8]="Damage",r[r.Heal=9]="Heal",r[r.Buff=10]="Buff",r[r.BuffRemove=11]="BuffRemove",r[r.CounterAttack=12]="CounterAttack",r[r.Line15=15]="Line15",r[r.Debug=251]="Debug",r[r.PacketDump=252]="PacketDump",r[r.Version=253]="Version",r[r.Error=254]="Error",r))(u||{}),d=class extends y{#r;emitText;emitLines;emitObjects;#d;#i;#c;#g;#s;constructor(a,s,n={}){super(),this.#r=s,this.emitText=n.emitText||!0,this.emitLines=n.emitLines||!0,this.emitObjects=n.emitObjects||!1,this.#d=new Set,this.#i=new g,this.#c=!1,this.#g=!1,this.#s={name:"You",class:0,gearLevel:0},a.on("PKTAuthTokenResult",t=>{}).on("PKTCounterAttackNotify",t=>{try{if(this.#t){let e=t.parsed;this.#e(12,e.SourceId,this.#a(e.SourceId),e.TargetId,this.#a(e.TargetId))}}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTDeathNotify",t=>{try{if(this.#t){let e=t.parsed;this.#e(5,e.TargetId,this.#a(e.TargetId),e.SourceId,this.#a(e.SourceId))}}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTInitEnv",t=>{try{let e=t.parsed;this.#i=new g;let i={entityId:e.PlayerId,entityType:c.Player,name:this.#s.name,class:this.#s.class,gearLevel:this.#s.gearLevel};this.#i.entities.set(i.entityId,i),this.#t&&this.#e(1,i.entityId)}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTInitPC",t=>{try{let e=t.parsed;this.#s={name:e.Name,class:e.ClassId,gearLevel:this.#m(e.GearLevel)};let i={entityId:e.PlayerId,entityType:c.Player,name:e.Name,class:e.ClassId,gearLevel:this.#m(e.GearLevel)};if(this.#i.entities.set(i.entityId,i),this.#t){let l=this.#n(t.parsed.statPair);this.#e(3,i.entityId,i.name,i.class,this.#r.getClassName(i.class),e.Level,i.gearLevel,Number(l.get(1))||0,Number(l.get(27))||0)}}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTNewNpc",t=>{try{let e=t.parsed,i={entityId:e.NpcStruct.ObjectId,entityType:c.Npc,name:this.#r.getNpcName(e.NpcStruct.TypeId),typeId:e.NpcStruct.TypeId};if(this.#i.entities.set(i.entityId,i),this.#t){let l=this.#n(t.parsed.NpcStruct.statPair);this.#e(4,i.entityId,i.typeId,i.name,Number(l.get(1))||0,Number(l.get(27))||0)}}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTNewNpcSummon",t=>{try{let e=t.parsed,i={entityId:e.NpcData.ObjectId,entityType:c.Summon,name:e.NpcData.ObjectId.toString(16),ownerId:e.OwnerId};this.#i.entities.set(i.entityId,i)}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTNewPC",t=>{try{let e=t.parsed,i={entityId:e.PCStruct.PlayerId,entityType:c.Player,name:e.PCStruct.Name,class:e.PCStruct.ClassId,gearLevel:this.#m(e.PCStruct.GearLevel)};if(this.#i.entities.set(i.entityId,i),this.#t){let l=this.#n(t.parsed.PCStruct.statPair);this.#e(3,i.entityId,i.name,i.class,this.#r.getClassName(i.class),e.PCStruct.Level,i.gearLevel,Number(l.get(1))||0,Number(l.get(27))||0)}}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTNewProjectile",t=>{try{let e=t.parsed,i={entityId:e.projectileInfo.ProjectileId,entityType:c.Projectile,name:e.projectileInfo.ProjectileId.toString(16),ownerId:e.projectileInfo.OwnerId};this.#i.entities.set(i.entityId,i)}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTParalyzationStateNotify",t=>{}).on("PKTPartyInfo",t=>{}).on("PKTPartyLeaveResult",t=>{}).on("PKTPartyStatusEffectAddNotify",t=>{}).on("PKTPartyStatusEffectRemoveNotify",t=>{}).on("PKTPartyStatusEffectResultNotify",t=>{}).on("PKTRaidBossKillNotify",t=>{this.#t&&this.#e(2,1)}).on("PKTRaidResult",t=>{this.#t&&this.#e(2,0)}).on("PKTRemoveObject",t=>{}).on("PKTSkillDamageAbnormalMoveNotify",t=>{try{if(this.#t){let e=t.parsed,i=this.#o(e.SourceId),l=this.#r.getSkillName(e.SkillId),m=this.#r.getSkillEffectComment(e.SkillEffectId);i=this.#l(i,e.SkillId),e.SkillDamageAbnormalMoveEvents.forEach(o=>{(o.skillDamageEvent.Modifier&15)===11&&e.SkillId==0,e.SkillEffectId!=0&&this.#e(8,i.entityId,i.name,e.SkillId,l,e.SkillEffectId,m,o.skillDamageEvent.TargetId,this.#a(o.skillDamageEvent.TargetId),Number(o.skillDamageEvent.Damage),o.skillDamageEvent.Modifier,Number(o.skillDamageEvent.CurHp),Number(o.skillDamageEvent.MaxHp))})}}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTSkillDamageNotify",t=>{try{if(this.#t){let e=t.parsed,i=this.#o(e.SourceId),l=this.#r.getSkillName(e.SkillId),m=this.#r.getSkillEffectComment(e.SkillEffectId);i=this.#l(i,e.SkillId),e.SkillDamageEvents.forEach(o=>{(o.Modifier&15)===11&&e.SkillId==0,e.SkillEffectId!=0&&this.#e(8,i.entityId,i.name,e.SkillId,l,e.SkillEffectId,m,o.TargetId,this.#a(o.TargetId),Number(o.Damage),o.Modifier,Number(o.CurHp),Number(o.MaxHp))})}}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTSkillStageNotify",t=>{try{if(this.#t){let e=t.parsed,i=this.#o(e.SourceId);i=this.#l(i,e.SkillId),this.#e(7,i.entityId,i.name,e.SkillId,this.#r.getSkillName(e.SkillId),e.Stage)}}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTSkillStartNotify",t=>{try{if(this.#t){let e=t.parsed,i=this.#o(e.SourceId);i=this.#l(i,e.SkillId),this.#e(6,i.entityId,i.name,e.SkillId,this.#r.getSkillName(e.SkillId))}}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTStatChangeOriginNotify",t=>{try{if(this.#t){let e=t.parsed,i=this.#n(t.parsed.StatPairList),l=this.#n(t.parsed.Unk1);this.#e(9,e.ObjectId,this.#a(e.ObjectId),Number(l.get(1))||0,Number(i.get(1))||0)}}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}}).on("PKTStatusEffectAddNotify",t=>{}).on("PKTStatusEffectRemoveNotify",t=>{}).on("PKTTriggerBossBattleStatus",t=>{this.#t&&this.#e(2,2)}).on("PKTTriggerFinishNotify",t=>{}).on("PKTTriggerStartNotify",t=>{try{switch(t.parsed.TriggerSignalType){case 57:case 59:case 61:case 63:case 74:case 76:this.#g=!0,this.#c=!1;break;case 58:case 60:case 62:case 64:case 75:case 77:this.#g=!1,this.#c=!0;break}}catch(e){console.error(`[meter-core/LegacyLogger] ${e}`)}})}#e(a,...s){if(this.emitText){let n=`${a}|${new Date().toISOString()}|${s.map(t=>typeof t=="bigint"?t.toString(16):t).join("|")}`;this.emit("line",n)}this.emitLines&&this.emit(a,...s)}get#t(){return this.emitText||this.emitLines}#o(a){let s=this.#i.entities.get(a);if((s?.entityType===c.Projectile||s?.entityType===c.Summon)&&(a=s.ownerId),s=this.#i.entities.get(a),!s){let n={entityId:a,entityType:c.Npc,name:a.toString(16)};return this.#i.entities.set(a,n),n}return s}#l(a,s){let n=this.#r.getSkillClassId(s);if(n!==0){let t;if(a.entityType===c.Player){let e=a;t={entityId:e.entityId,entityType:c.Player,name:e.name,class:n,gearLevel:e.gearLevel}}else t={entityId:a.entityId,entityType:c.Player,name:a.entityId.toString(16),class:n,gearLevel:0};return this.#i.entities.set(a.entityId,t),this.#e(3,t.entityId,t.name,t.class,this.#r.getClassName(t.class),1,t.gearLevel,0,0),t}return a}#a(a){return this.#i.entities.get(a)?.name||a.toString(16)}#n(a){let s=new Map;return a.forEach(n=>{s.set(n.Unk0_0_1,n.readNBytesInt64)}),s}#m(a){let s=Buffer.alloc(4);return s.writeUInt32LE(a),Math.round(s.readFloatLE()*100)/100}},g=class{start;entities;constructor(){this.start=Date.now(),this.entities=new Map}},c=(t=>(t[t.Player=0]="Player",t[t.Npc=1]="Npc",t[t.Summon=2]="Summon",t[t.Projectile=3]="Projectile",t))(c||{});export{d as LegacyLogger,u as LineId};
