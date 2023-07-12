var b=(v=>(v[v.none=0]="none",v[v.slot=1]="slot",v[v.stat=2]="stat",v[v.ability_point=3]="ability_point",v[v.combat_effect=4]="combat_effect",v[v.skill_damage=5]="skill_damage",v[v.skill_critical_ratio=6]="skill_critical_ratio",v[v.skill_critical_damage=7]="skill_critical_damage",v[v.skill_penetration=8]="skill_penetration",v[v.npc_grade_less_damage=9]="npc_grade_less_damage",v[v.npc_grade_less_critical_ratio=10]="npc_grade_less_critical_ratio",v[v.npc_grade_less_critical_damage=11]="npc_grade_less_critical_damage",v[v.npc_grade_less_penetration=12]="npc_grade_less_penetration",v[v.npc_grade_greater_damage=13]="npc_grade_greater_damage",v[v.npc_grade_greater_critical_ratio=14]="npc_grade_greater_critical_ratio",v[v.npc_grade_greater_critical_damage=15]="npc_grade_greater_critical_damage",v[v.npc_grade_greater_penetration=16]="npc_grade_greater_penetration",v[v.npc_species_damage=17]="npc_species_damage",v[v.npc_species_critical_ratio=18]="npc_species_critical_ratio",v[v.npc_species_critical_damage=19]="npc_species_critical_damage",v[v.npc_species_penetration=20]="npc_species_penetration",v[v.npc_attr_damage=21]="npc_attr_damage",v[v.npc_attr_critical_ratio=22]="npc_attr_critical_ratio",v[v.npc_attr_critical_damage=23]="npc_attr_critical_damage",v[v.npc_attr_penetration=24]="npc_attr_penetration",v[v.mana_reduction=25]="mana_reduction",v[v.skill_mana_reduction=26]="skill_mana_reduction",v[v.skill_cooldown_reduction=27]="skill_cooldown_reduction",v[v.ability_feature=28]="ability_feature",v[v.class_option=29]="class_option",v[v.ability_point_passive=30]="ability_point_passive",v[v.instrument=31]="instrument",v[v.skill_feature=32]="skill_feature",v[v.npc_adaptation=33]="npc_adaptation",v[v.skill_group_damage=34]="skill_group_damage",v[v.skill_group_cooldown_reduction=35]="skill_group_cooldown_reduction",v[v.skill_level=36]="skill_level",v[v.skill_feature_level=37]="skill_feature_level",v[v.life_casting_speed=38]="life_casting_speed",v[v.life_casting_tier=39]="life_casting_tier",v[v.life_bonus_type_success=40]="life_bonus_type_success",v[v.life_bonus_type_extra=41]="life_bonus_type_extra",v[v.life_bonus_type_skill_bonus=42]="life_bonus_type_skill_bonus",v[v.life_bonus_type_minigame_perfect=43]="life_bonus_type_minigame_perfect",v[v.life_durability_bonus=44]="life_durability_bonus",v[v.life_mini_game_difficulty=45]="life_mini_game_difficulty",v[v.combat_effect_cooldown_reduction=46]="combat_effect_cooldown_reduction",v[v.skill_damage_addend=47]="skill_damage_addend",v[v.awakening_usable_count_addend=48]="awakening_usable_count_addend",v[v.battle_item_heal=49]="battle_item_heal",v[v.party_heal=50]="party_heal",v[v.party_shield=51]="party_shield",v[v.identity_gauge=52]="identity_gauge",v[v.attack_power_amplify_addend=53]="attack_power_amplify_addend",v[v.attack_power_amplify_multiplier=54]="attack_power_amplify_multiplier",v[v.not_in_party_damage=55]="not_in_party_damage",v[v.skill_effect_group_set_damage=56]="skill_effect_group_set_damage",v))(b||{});var q=(w=>(w[w.none=0]="none",w[w.modify_damage=1]="modify_damage",w[w.modify_final_damage=2]="modify_final_damage",w[w.modify_critical_ratio=3]="modify_critical_ratio",w[w.modify_critical_multiplier=4]="modify_critical_multiplier",w[w.modify_penetration=5]="modify_penetration",w[w.modify_penetration_when_critical=6]="modify_penetration_when_critical",w[w.exec_active_effect_when_damage=7]="exec_active_effect_when_damage",w[w.exec_active_effect_when_critical=8]="exec_active_effect_when_critical",w[w.exec_reactive_effect_when_miss=9]="exec_reactive_effect_when_miss",w[w.exec_reactive_effect_when_damage=10]="exec_reactive_effect_when_damage",w[w.exec_reactive_effect_when_critical=11]="exec_reactive_effect_when_critical",w[w.exec_after_effect=12]="exec_after_effect",w[w.exec_after_skill=13]="exec_after_skill",w[w.apply_heal=14]="apply_heal",w[w.modify_reactive_damage=15]="modify_reactive_damage",w[w.modify_damage_shield_multiplier=16]="modify_damage_shield_multiplier",w[w.exec_active_effect_when_kill=17]="exec_active_effect_when_kill",w[w.exec_start_skill=18]="exec_start_skill",w[w.modify_penetration_addend=19]="modify_penetration_addend",w[w.modify_penetration_addend_when_critical=20]="modify_penetration_addend_when_critical",w[w.modify_reactive_critical_multiplier=21]="modify_reactive_critical_multiplier",w[w.modify_damage_when_critical=22]="modify_damage_when_critical",w[w.modify_paralyzation_point=23]="modify_paralyzation_point",w))(q||{}),j=(d=>(d[d.none=0]="none",d[d.self=1]="self",d[d.target=2]="target",d[d.caster=3]="caster",d))(j||{}),z=(l=>(l[l.none=0]="none",l[l.current_skill=1]="current_skill",l[l.hp_less=2]="hp_less",l[l.hp_greater=3]="hp_greater",l[l.mp_less=4]="mp_less",l[l.mp_greater=5]="mp_greater",l[l.npc_grade_less=6]="npc_grade_less",l[l.npc_grade_greater=7]="npc_grade_greater",l[l.npc_grade_equal=8]="npc_grade_equal",l[l.npc_species=9]="npc_species",l[l.npc_attr=10]="npc_attr",l[l.abnormal_move=11]="abnormal_move",l[l.abnormal_status=12]="abnormal_status",l[l.abnormal_move_immune=13]="abnormal_move_immune",l[l.abnormal_status_immune=14]="abnormal_status_immune",l[l.abnormal_move_all=15]="abnormal_move_all",l[l.pc=16]="pc",l[l.skill_effect_id=17]="skill_effect_id",l[l.identity_stack_count=18]="identity_stack_count",l[l.status_effect_immunetype=19]="status_effect_immunetype",l[l.abnormal_not_move=20]="abnormal_not_move",l[l.target_count=21]="target_count",l[l.skill_identity_category=22]="skill_identity_category",l[l.identity_element_value=23]="identity_element_value",l[l.directional_attack=24]="directional_attack",l[l.current_skill_group=25]="current_skill_group",l[l.abnormal_move_status_all=26]="abnormal_move_status_all",l[l.identity_stance=27]="identity_stance",l[l.pc_skill=28]="pc_skill",l[l.skill_effect_group_set=29]="skill_effect_group_set",l[l.npc_id=30]="npc_id",l[l.identity_element_value_less=31]="identity_element_value_less",l[l.pc_without_me=32]="pc_without_me",l[l.npc_scaled_level_equal=33]="npc_scaled_level_equal",l[l.npc_scaled_level_less=34]="npc_scaled_level_less",l[l.npc_scaled_level_greater=35]="npc_scaled_level_greater",l[l.not_skill_effect_id=36]="not_skill_effect_id",l[l.abnormal_move_not_immune=37]="abnormal_move_not_immune",l[l.apply_target_marking=38]="apply_target_marking",l[l.damage_attr=39]="damage_attr",l))(z||{});var k=(h=>(h[h.none=0]="none",h[h.berserker_normal=1]="berserker_normal",h[h.berserker_rush=2]="berserker_rush",h[h.warlord_normal=3]="warlord_normal",h[h.warlord_shield_of_battlefield=4]="warlord_shield_of_battlefield",h[h.destroyer_normal=5]="destroyer_normal",h[h.destroyer_focus=6]="destroyer_focus",h[h.destroyer_release=7]="destroyer_release",h[h.battle_master_normal=8]="battle_master_normal",h[h.battle_master_bubble=9]="battle_master_bubble",h[h.infighter_normal=10]="infighter_normal",h[h.infighter_vigor=11]="infighter_vigor",h[h.infighter_shock=12]="infighter_shock",h[h.forcemaster_normal=13]="forcemaster_normal",h[h.forcemaster_soul=14]="forcemaster_soul",h[h.lance_master_normal=15]="lance_master_normal",h[h.lance_master_wild=16]="lance_master_wild",h[h.lance_master_focus=17]="lance_master_focus",h[h.devil_hunter_normal=18]="devil_hunter_normal",h[h.devil_hunter_pistol=19]="devil_hunter_pistol",h[h.devil_hunter_shotgun=20]="devil_hunter_shotgun",h[h.devil_hunter_rifle=21]="devil_hunter_rifle",h[h.blaster_normal=22]="blaster_normal",h[h.blaster_cannon=23]="blaster_cannon",h[h.hawkeye_normal=24]="hawkeye_normal",h[h.hawkeye_summon=25]="hawkeye_summon",h[h.summoner_normal=26]="summoner_normal",h[h.summoner_ancient=27]="summoner_ancient",h[h.arcana_normal=28]="arcana_normal",h[h.arcana_stack=29]="arcana_stack",h[h.arcana_ruin=30]="arcana_ruin",h[h.arcana_card=31]="arcana_card",h[h.bard_normal=32]="bard_normal",h[h.bard_serenade=33]="bard_serenade",h[h.blade_burst=34]="blade_burst",h[h.holyknight_normal=35]="holyknight_normal",h[h.holyknight_holy=36]="holyknight_holy",h[h.holyknight_retribution=37]="holyknight_retribution",h[h.demonic_normal=38]="demonic_normal",h[h.demonic_capture=39]="demonic_capture",h[h.demonic_demon=40]="demonic_demon",h[h.warlord_lance=41]="warlord_lance",h[h.reaper_normal=42]="reaper_normal",h[h.reaper_dagger=43]="reaper_dagger",h[h.reaper_shadow=44]="reaper_shadow",h[h.reaper_swoop=45]="reaper_swoop",h[h.scouter_scout=46]="scouter_scout",h[h.scouter_drone=47]="scouter_drone",h[h.scouter_hyper_sync=48]="scouter_hyper_sync",h[h.scouter_fusion=49]="scouter_fusion",h[h.blade_normal=50]="blade_normal",h[h.elemental_master_normal=51]="elemental_master_normal",h[h.elemental_master_fire=52]="elemental_master_fire",h[h.elemental_master_electricity=53]="elemental_master_electricity",h[h.elemental_master_ice=54]="elemental_master_ice",h[h.yinyangshi_normal=55]="yinyangshi_normal",h[h.yinyangshi_yin=56]="yinyangshi_yin",h[h.yinyangshi_yang=57]="yinyangshi_yang",h[h.weather_artist_weapon=58]="weather_artist_weapon",h[h.weather_artist_weather=59]="weather_artist_weather",h[h.summoner_summon=60]="summoner_summon",h))(k||{});var A=(u=>(u[u.none=0]="none",u[u.underling=1]="underling",u[u.normal=2]="normal",u[u.elite=3]="elite",u[u.named=4]="named",u[u.seed=5]="seed",u[u.boss=6]="boss",u[u.raid=7]="raid",u[u.lucky=8]="lucky",u[u.epic_raid=9]="epic_raid",u[u.commander=10]="commander",u))(A||{});var B=(x=>(x[x.absolute=0]="absolute",x[x.relative=1]="relative",x))(B||{});var C=(n=>(n[n.none=0]="none",n[n.enable_notify=1]="enable_notify",n[n.enable_dir_change=2]="enable_dir_change",n[n.change_move_dist=3]="change_move_dist",n[n.change_layer=4]="change_layer",n[n.change_stage_speed=5]="change_stage_speed",n[n.change_stage_collision=6]="change_stage_collision",n[n.change_max_target=7]="change_max_target",n[n.change_area_range=8]="change_area_range",n[n.change_area_angle=9]="change_area_angle",n[n.change_cost=10]="change_cost",n[n.recover_cost=11]="recover_cost",n[n.recover_used_cost=12]="recover_used_cost",n[n.reduce_default_cooldown=13]="reduce_default_cooldown",n[n.reduce_active_cooldown=14]="reduce_active_cooldown",n[n.enable_stage_buff=15]="enable_stage_buff",n[n.add_stage_buff=16]="add_stage_buff",n[n.change_buff_area_range=17]="change_buff_area_range",n[n.change_buff_duration=18]="change_buff_duration",n[n.change_buff_stat=19]="change_buff_stat",n[n.change_buff_stack=20]="change_buff_stack",n[n.change_buff_param=21]="change_buff_param",n[n.change_buff_expired_action=22]="change_buff_expired_action",n[n.change_chain_ratio=23]="change_chain_ratio",n[n.change_abnormal=24]="change_abnormal",n[n.change_abnormal_ratio=25]="change_abnormal_ratio",n[n.change_dam_attr=26]="change_dam_attr",n[n.change_dam_value=27]="change_dam_value",n[n.change_dam_coefficient=28]="change_dam_coefficient",n[n.change_dam_critical=29]="change_dam_critical",n[n.change_dam_critical_rate=30]="change_dam_critical_rate",n[n.change_attack_stage_speed=31]="change_attack_stage_speed",n[n.change_stack_charge_time=32]="change_stack_charge_time",n[n.change_stack_max_count=33]="change_stack_max_count",n[n.change_targeting=34]="change_targeting",n[n.change_min_range=35]="change_min_range",n[n.change_max_range=36]="change_max_range",n[n.change_push_info=37]="change_push_info",n[n.change_parts_attack_attr=38]="change_parts_attack_attr",n[n.change_skill_chain_info=39]="change_skill_chain_info",n[n.change_skill_chain_delay=40]="change_skill_chain_delay",n[n.change_behit_move_info=41]="change_behit_move_info",n[n.add_buff_stat=42]="add_buff_stat",n[n.add_chain_skill_effect=43]="add_chain_skill_effect",n[n.remove_chain_skill_effect=44]="remove_chain_skill_effect",n[n.add_chain_combat_effect=45]="add_chain_combat_effect",n[n.remove_chain_combat_effect=46]="remove_chain_combat_effect",n[n.change_skill_effect_bonus=47]="change_skill_effect_bonus",n[n.change_skill_effect_ai_point=48]="change_skill_effect_ai_point",n[n.change_dam_addend=49]="change_dam_addend",n[n.change_hitted=50]="change_hitted",n[n.change_skill_move_speed=51]="change_skill_move_speed",n[n.add_skill_buff=52]="add_skill_buff",n[n.change_skill_bonus=53]="change_skill_bonus",n[n.change_skill_normal_info=54]="change_skill_normal_info",n[n.change_skill_invisibility=55]="change_skill_invisibility",n[n.change_skill_constraint=56]="change_skill_constraint",n[n.change_skill_book_type=57]="change_skill_book_type",n[n.change_projection_skill_effect_id=58]="change_projection_skill_effect_id",n[n.change_push_pvp_info=59]="change_push_pvp_info",n[n.change_forced_critical=60]="change_forced_critical",n[n.change_instance_skill_effect_info=61]="change_instance_skill_effect_info",n[n.change_skill_start_stage=62]="change_skill_start_stage",n[n.change_skill_effect_dir_target=63]="change_skill_effect_dir_target",n[n.change_stage_dir_rate=64]="change_stage_dir_rate",n[n.change_projection=65]="change_projection",n[n.change_skill_view=66]="change_skill_view",n[n.change_projectile_speed=67]="change_projectile_speed",n[n.change_projectile_dist=68]="change_projectile_dist",n[n.change_projectile_resourcescale=69]="change_projectile_resourcescale",n[n.change_projectile_max_target_hit_count=70]="change_projectile_max_target_hit_count",n[n.change_summon_trap_lifetime=71]="change_summon_trap_lifetime",n[n.change_summon_trap_destroy_delaytime=72]="change_summon_trap_destroy_delaytime",n[n.change_summon_trap_react_info=73]="change_summon_trap_react_info",n[n.change_summon_trap_invoke_effect=74]="change_summon_trap_invoke_effect",n[n.change_summon_trap_count=75]="change_summon_trap_count",n[n.enable_identity_event=76]="enable_identity_event",n[n.change_identity_proc_value=77]="change_identity_proc_value",n[n.change_skill_effect_identity_proc_info=78]="change_skill_effect_identity_proc_info",n[n.change_identity_proc_pvp_value=79]="change_identity_proc_pvp_value",n[n.change_skill_effect_identity_proc_pvp_info=80]="change_skill_effect_identity_proc_pvp_info",n[n.change_skill_effect_identity_proc_replace_info=81]="change_skill_effect_identity_proc_replace_info",n[n.change_skill_effect_identity_proc_replace_pvp_info=82]="change_skill_effect_identity_proc_replace_pvp_info",n[n.swap_chain_skill_effect=83]="swap_chain_skill_effect",n[n.swap_chain_combat_effect=84]="swap_chain_combat_effect",n[n.change_charge_scale=85]="change_charge_scale",n[n.change_summon_npc_id=86]="change_summon_npc_id",n[n.change_summon_npc_sight_range=87]="change_summon_npc_sight_range",n[n.change_summon_npc_pursuit_range=88]="change_summon_npc_pursuit_range",n[n.change_summon_npc_walk_movespeed=89]="change_summon_npc_walk_movespeed",n[n.change_summon_npc_battle_movespeed=90]="change_summon_npc_battle_movespeed",n[n.change_summon_npc_life_time=91]="change_summon_npc_life_time",n[n.change_summon_npc_ai_index=92]="change_summon_npc_ai_index",n[n.change_summon_npc_invincible_duration=93]="change_summon_npc_invincible_duration",n[n.change_summon_npc_acquire_identity=94]="change_summon_npc_acquire_identity",n[n.change_summon_npc_skill_id=95]="change_summon_npc_skill_id",n[n.change_summon_npc_die_skill_id=96]="change_summon_npc_die_skill_id",n[n.change_summon_npc_destroy_skill_id=97]="change_summon_npc_destroy_skill_id",n[n.change_summon_npc_spawn_buff_id=98]="change_summon_npc_spawn_buff_id",n[n.change_summon_npc_count=99]="change_summon_npc_count",n[n.change_summon_npc_stat=100]="change_summon_npc_stat",n[n.change_summon_npc_threat_point=101]="change_summon_npc_threat_point",n[n.change_summon_npc_skill_usable_tick=102]="change_summon_npc_skill_usable_tick",n[n.change_summon_npc_skill_use_order=103]="change_summon_npc_skill_use_order",n[n.change_combat_effect_arg=104]="change_combat_effect_arg",n[n.change_skill_effect_cost=105]="change_skill_effect_cost",n[n.change_accumulate_dam_rate=106]="change_accumulate_dam_rate",n[n.change_projectile_bank_data_addend=107]="change_projectile_bank_data_addend",n[n.change_identity_category=108]="change_identity_category",n))(C||{}),D=(_=>(_[_.none=0]="none",_[_.hp=1]="hp",_[_.mp=2]="mp",_[_.str=3]="str",_[_.agi=4]="agi",_[_.int=5]="int",_[_.con=6]="con",_[_.str_x=7]="str_x",_[_.agi_x=8]="agi_x",_[_.int_x=9]="int_x",_[_.con_x=10]="con_x",_[_.criticalhit=15]="criticalhit",_[_.specialty=16]="specialty",_[_.oppression=17]="oppression",_[_.rapidity=18]="rapidity",_[_.endurance=19]="endurance",_[_.mastery=20]="mastery",_[_.criticalhit_x=21]="criticalhit_x",_[_.specialty_x=22]="specialty_x",_[_.oppression_x=23]="oppression_x",_[_.rapidity_x=24]="rapidity_x",_[_.endurance_x=25]="endurance_x",_[_.mastery_x=26]="mastery_x",_[_.max_hp=27]="max_hp",_[_.max_mp=28]="max_mp",_[_.max_hp_x=29]="max_hp_x",_[_.max_mp_x=30]="max_mp_x",_[_.max_hp_x_x=31]="max_hp_x_x",_[_.max_mp_x_x=32]="max_mp_x_x",_[_.normal_hp_recovery=33]="normal_hp_recovery",_[_.combat_hp_recovery=34]="combat_hp_recovery",_[_.normal_hp_recovery_rate=35]="normal_hp_recovery_rate",_[_.combat_hp_recovery_rate=36]="combat_hp_recovery_rate",_[_.normal_mp_recovery=37]="normal_mp_recovery",_[_.combat_mp_recovery=38]="combat_mp_recovery",_[_.normal_mp_recovery_rate=39]="normal_mp_recovery_rate",_[_.combat_mp_recovery_rate=40]="combat_mp_recovery_rate",_[_.self_recovery_rate=41]="self_recovery_rate",_[_.drain_hp_dam_rate=42]="drain_hp_dam_rate",_[_.drain_mp_dam_rate=43]="drain_mp_dam_rate",_[_.dam_reflection_rate=44]="dam_reflection_rate",_[_.char_attack_dam=47]="char_attack_dam",_[_.skill_effect_dam_addend=48]="skill_effect_dam_addend",_[_.attack_power_rate=49]="attack_power_rate",_[_.skill_damage_rate=50]="skill_damage_rate",_[_.attack_power_rate_x=51]="attack_power_rate_x",_[_.skill_damage_rate_x=52]="skill_damage_rate_x",_[_.cooldown_reduction=53]="cooldown_reduction",_[_.paralyzation_point_rate=54]="paralyzation_point_rate",_[_.def=55]="def",_[_.res=56]="res",_[_.def_x=57]="def_x",_[_.res_x=58]="res_x",_[_.def_x_x=59]="def_x_x",_[_.res_x_x=60]="res_x_x",_[_.def_pen_rate=67]="def_pen_rate",_[_.res_pen_rate=68]="res_pen_rate",_[_.physical_inc_rate=69]="physical_inc_rate",_[_.magical_inc_rate=70]="magical_inc_rate",_[_.self_shield_rate=71]="self_shield_rate",_[_.hit_rate=72]="hit_rate",_[_.dodge_rate=73]="dodge_rate",_[_.critical_hit_rate=74]="critical_hit_rate",_[_.critical_res_rate=75]="critical_res_rate",_[_.critical_dam_rate=76]="critical_dam_rate",_[_.attack_speed=77]="attack_speed",_[_.attack_speed_rate=78]="attack_speed_rate",_[_.move_speed=79]="move_speed",_[_.move_speed_rate=80]="move_speed_rate",_[_.prop_move_speed=81]="prop_move_speed",_[_.prop_move_speed_rate=82]="prop_move_speed_rate",_[_.vehicle_move_speed=83]="vehicle_move_speed",_[_.vehicle_move_speed_rate=84]="vehicle_move_speed_rate",_[_.ship_move_speed=85]="ship_move_speed",_[_.ship_move_speed_rate=86]="ship_move_speed_rate",_[_.fire_dam_rate=87]="fire_dam_rate",_[_.ice_dam_rate=88]="ice_dam_rate",_[_.electricity_dam_rate=89]="electricity_dam_rate",_[_.earth_dam_rate=91]="earth_dam_rate",_[_.dark_dam_rate=92]="dark_dam_rate",_[_.holy_dam_rate=93]="holy_dam_rate",_[_.elements_dam_rate=94]="elements_dam_rate",_[_.fire_res_rate=95]="fire_res_rate",_[_.ice_res_rate=96]="ice_res_rate",_[_.electricity_res_rate=97]="electricity_res_rate",_[_.earth_res_rate=99]="earth_res_rate",_[_.dark_res_rate=100]="dark_res_rate",_[_.holy_res_rate=101]="holy_res_rate",_[_.elements_res_rate=102]="elements_res_rate",_[_.self_cc_time_rate=105]="self_cc_time_rate",_[_.enemy_cc_time_rate=106]="enemy_cc_time_rate",_[_.identity_value1=107]="identity_value1",_[_.identity_value2=108]="identity_value2",_[_.identity_value3=109]="identity_value3",_[_.awakening_dam_rate=110]="awakening_dam_rate",_[_.item_drop_rate=111]="item_drop_rate",_[_.gold_rate=112]="gold_rate",_[_.exp_rate=113]="exp_rate",_[_.attack_power_addend=123]="attack_power_addend",_[_.attack_power_addend_2=124]="attack_power_addend_2",_[_.npc_species_humanoid_dam_rate=125]="npc_species_humanoid_dam_rate",_[_.npc_species_devil_dam_rate=126]="npc_species_devil_dam_rate",_[_.npc_species_substance_dam_rate=127]="npc_species_substance_dam_rate",_[_.npc_species_undead_dam_rate=128]="npc_species_undead_dam_rate",_[_.npc_species_plant_dam_rate=129]="npc_species_plant_dam_rate",_[_.npc_species_insect_dam_rate=130]="npc_species_insect_dam_rate",_[_.npc_species_spirit_dam_rate=131]="npc_species_spirit_dam_rate",_[_.npc_species_wild_beast_dam_rate=132]="npc_species_wild_beast_dam_rate",_[_.npc_species_mechanic_dam_rate=133]="npc_species_mechanic_dam_rate",_[_.npc_species_ancient_dam_rate=134]="npc_species_ancient_dam_rate",_[_.npc_species_god_dam_rate=135]="npc_species_god_dam_rate",_[_.npc_species_archfiend_dam_rate=136]="npc_species_archfiend_dam_rate",_[_.vitality=137]="vitality",_[_.ship_booter_speed=138]="ship_booter_speed",_[_.ship_wreck_speed_rate=139]="ship_wreck_speed_rate",_[_.island_speed_rate=140]="island_speed_rate",_[_.attack_power_sub_rate_1=141]="attack_power_sub_rate_1",_[_.attack_power_sub_rate_2=142]="attack_power_sub_rate_2",_[_.physical_inc_sub_rate_1=143]="physical_inc_sub_rate_1",_[_.physical_inc_sub_rate_2=144]="physical_inc_sub_rate_2",_[_.magical_inc_sub_rate_1=145]="magical_inc_sub_rate_1",_[_.magical_inc_sub_rate_2=146]="magical_inc_sub_rate_2",_[_.skill_damage_sub_rate_1=147]="skill_damage_sub_rate_1",_[_.skill_damage_sub_rate_2=148]="skill_damage_sub_rate_2",_[_.resource_recovery_rate=149]="resource_recovery_rate",_[_.weapon_dam=151]="weapon_dam",_))(D||{});export{b as a,q as b,j as c,z as d,k as e,A as f,B as g,C as h,D as i};