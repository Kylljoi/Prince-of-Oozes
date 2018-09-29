/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Subclass (a.k.a. Archetype)
	Effect:		This is the syntax for adding a new subclass/archetype to a class that is defined in the sheet, or to a class you made yourself
	Sheet:		v12.999 (2017-11-29)
*/

var iFileName = "Artificer - Infusionsmith.js";
RequiredSheetVersion(12.999); 
AddSubClass(

	"revartificer",
	
	"infusionsmith",
	
	{ // don't forget this opening bracket

		regExpSearch : /^(?=.*infusion)(?=.*smith).*$/i,
		
		subname : "Infusionsmith",
		
		source : ["HB", 0],
		
		features : {
		
			"subclassfeature1" : {
				name : "Infusionsmith's Proficiency",
				source : ["HB", 0],
				minlevel : 1,
				description : "\n   " + "I gain proficiency with jeweler's tools and calligrapher's supplies." + "\n   " + "Creating a magic spell scroll only takes me half the normal time and material cost.",
				toolProfs : [["Jeweler's tools"], ["Calligrapher's supplies"]],
			},
			"subclassfeature2" : {
				name : "Store Magic",
				source : ["HB", 0],
				minlevel : 3,
				description : "\n   " + "At the end of a short or long rest, pick a spell I know. I can infuse this spell into an item for later use. This uses components, but not spell slots." + "\n   " + "Any +6 INT creature with awareness of spell storage can expend this magic, using my modifiers but not concentration. Fades if not used before next short or long rest.",
			},
			"subclassfeature3" : {
				name : "Animated Weapon",
				source : ["HB", 0],
				minlevel : 5,
				description : "\n   " + "At the end of a long rest, I can animate a weapon in my possession. I do not need proficiency. When making an attack, I can mentally direct this weapon to attack as well." + "\n   " + "The weapon returns to my side after every attack, and requires a path, otherwise ignores cover. Attacks have proficiency and can be modified by INT instead for both rolls." + "\n   " + "For every cast of magical weapon, elemental weapon or holy weapon, spell also applies to weapon for duration.",
			},
			"subclassfeature4" : {
				name : "Infused Focus",
				source : ["HB", 0],
				minlevel : 14,
				description : "\n   " + "I can anchor a powerfull spell onto an item. Spells requiring concentration no longer require it." + "\n   " + "Once I use this ability, I must complete a short or long rest before next use.",
				recovery : "short or long rest",
				recovery : "short or long rest",
			},
			
			"subclassfeature5" : {
				name : "Specialization Upgrade 1",
				source : ["HB", 0],
				minlevel : 3,
				description : "\n   " + "Choose an upgrade using the \"Choose Feature\" button above",
				choices : ["Arcane Armament","Enhance Attribute","Shielding Ring","Skill Infusion","Soul Saving Bond","Triggered Infusion","Warding Stone","Worn Enchantment"], //optional; choices the feature offers, if any.
				
				"arcane armament" : {
					name : "Arcane Armament",
					description : "\n   " + "I learn the mage armor spell and cast it at will." + "\n   " + "While under the effect of mage armor, my base AC becomes 14 + my Dexterity modifier, and I gain resistance to force damage.", //required;
					spellcastingBonus : {
						name : "Arcane Armament Upgrade",
						spells : ["mage armor"],
						selection : ["mage armor"],						
						atwill : true,					
					},
				},
				
				"enhance attribute" : {
					name : "Enhance Attribute",
					description : "\n   " + "I can enhance a piece of non-magical jewelery with ability-boosting power." + "\n   " + "Adds +1 to any ability score, can exceed maximums. Can be taken twice.",
				},
				
				"shielding ring" : {
					name : "Shielding Ring",
					description : "\n   " + "I can enfuse a non-magical ring with powerfull magic. This ring can be used to cast shield without a spell slot. Recovers on any rest.",
				},
				
				"skill infusion" : {
					name : "Skill Infusion",
					description : "\n   " + "My infusion is now so potent my weapons seem like they possess fighting styles." + "\n   " + "Choose from Dueling, Archery or Great Weapons Master, apply to Infused and Animated weapons.",
				},
				
				"soul saving bond" : {
					name : "Soul Saving Bond",
					description : "\n   " + "I set up a magical bond between me and another creature." + "\n   " + "When either fails a WIS, INT, CHA, or Deat hsaving throw, the other can roll and replace." + "\n   " + "Both creatures must take a short or long rest before next replacement. Bond can be set up with a new creature after a long rest.",
				},
				
				"triggered infusion" : {
					name : "Triggered Infusion",
					description : "\n   " + "I can now add a triggering event to my Store Magic feature. If the event occurs, I can spend my reaction to trigger the spell. Can be a verbal key.",
					action : ["reaction", "Trigger Stored Magic"]
				},
				
				"warding stone" : {
					name : "Warding Stone",
					description : "\n   " + "I can imbue an item temporary hit points equal to my Artificer level." + "\n   " + "Whoever is carrying this item gains these hitpoints, and they refresh when I take a long rest.",
				},
				
				"worn enchantment" : {
					name : "Worn Enchantment",
					description : "\n   " + "I can enchant and animate a worn item to assist me in a task." + "\n   " + "I can expend 1 spell slot to gain proficiency in a STR or DEX skill check until my next long rest." + "\n   " + "I can expend all of the item's magic to give me advantage on one check of that skill, ending the effect until my next long rest.",
				},
			
			},	
			
			"subclassfeature6" : {
				name : "Specialization Upgrade 2",
				source : ["HB", 0],
				minlevel : 5,
				description : "\n   " + "Choose an upgrade using the \"Choose Feature\" button above",
				choices : ["Arcane Armament","Enhance Attribute","Shielding Ring","Skill Infusion","Soul Saving Bond","Triggered Infusion","Warding Stone","Worn Enchantment",/* LVL 5 */"Animated Archer","Thunder Mine","Weapon Enchantment Expertise"], //optional; choices the feature offers, if any.
			
				"arcane armament" : {
					name : "Arcane Armament",
					description : "\n   " + "I learn the mage armor spell and cast it at will." + "\n   " + "While under the effect of mage armor, my base AC becomes 14 + my Dexterity modifier, and I gain resistance to force damage.", //required;
					spellcastingBonus : {
				
						name : "Arcane Armament Upgrade",
						
						spells : ["mage armor"],
						selection : ["mage armor"],
						atwill : true,
					},
				},
				
				"enhance attribute" : {
					name : "Enhance Attribute",
					description : "\n   " + "I can enhance a piece of non-magical jewelery with ability-boosting power." + "\n   " + "Adds +1 to any ability score, can exceed maximums. Can be taken twice.",
				},
				
				"shielding ring" : {
					name : "Shielding Ring",
					description : "\n   " + "I can enfuse a non-magical ring with powerfull magic. This ring can be used to cast shield without a spell slot. Recovers on any rest.",
				},
				
				"skill infusion" : {
					name : "Skill Infusion",
					description : "\n   " + "I can choose from Dueling, Archery or Great Weapons Master. Apply to Infused and Animated weapons.",
				},
				
				"soul saving bond" : {
					name : "Soul Saving Bond",
					description : "\n   " + "I set up a magical bond between me and another creature." + "\n   " + "When either fails a WIS, INT, CHA, or Deat hsaving throw, the other can roll and replace." + "\n   " + "Both creatures must take a short or long rest before next replacement. Bond can be set up with a new creature after a long rest.",
				},
				
				"triggered infusion" : {
					name : "Triggered Infusion",
					description : "\n   " + "I can now add a triggering event to my Store Magic feature. If the event occurs, I can spend my reaction to trigger the spell. Can be a verbal key.",
					action : ["reaction", ""]
				},
				
				"warding stone" : {
					name : "Warding Stone",
					description : "\n   " + "I can imbue an item temporary hit points equal to my Artificer level." + "\n   " + "Whoever is carrying this item gains these hitpoints, and they refresh when I take a long rest.",
				},
				
				"worn enchantment" : {
					name : "Worn Enchantment",
					description : "\n   " + "I can enchant and animate a worn item to assist me in a task." + "\n   " + "I can expend 1 spell slot to gain proficiency in a STR or DEX skill check until my next long rest." + "\n   " + "I can expend all of the item's magic to give me advantage on one check of that skill, ending the effect until my next long rest.",
				},
				
				"animated archer" : {
					name : "Animated Archer",
					description : "\n   " + "I can now animate ranged weapons, with their own quiver of 30 ammo." + "\n   " + "It can target anything in its range and move 30ft, taking an action to reload with more ammo.",
				},
				
				"thunder mine" : {
					name : "Thunder Mine",
					description : "\n   " + "I can infuse explosive magic in an item, with a trigger (rec. 5 ft). Casts shatter centred on the item." + "\n   " + "If a creature is within range of more than one mine during a turn, they take half damage after the first." + "\n   " + "Setting the mine is a 1 minute ritual, and explodes if moved. Only I can disarm it." + "\n   " + "I can set an amount equal to my intelligence modifier, refreshing at the end of a long rest. Existing mines lose magic.",
				},
				
				"weapon enchantment expertise" : {
					name : "Weapon Enchantment Expertise",
					description : "\n   " + "I learn the spell magical weapon, and at 9th level I learn the spell elemental weapon.When you cast magical weapon or elemental weapon, you can target a weapon that is already magical, adding to any effect the weapon already has." + "\n   " + "Additionally, when you have to make a Constitution saving throw to maintain concentration, you do so with advantage.",
					additional : ["magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon"],
					spellcastingBonus : [{
						name : "Weapon Enchantment Expertise",
						spells : "magical weapon",
						selection : "magical weapon",
					}, {
						name : "Weapon Enchantment Expertise",
						spells : "elemental weapon",
						selection : "elemental weapon",
					}]
				},
			},
			
			"subclassfeature7" : {
				name : "Specialization Upgrade 3",
				source : ["HB", 0],
				minlevel : 7,
				description : "\n   " + "Choose an upgrade using the \"Choose Feature\" button above",
				choices : ["Arcane Armament","Enhance Attribute","Shielding Ring","Skill Infusion","Soul Saving Bond","Triggered Infusion","Warding Stone","Worn Enchantment",/* LVL 5 */"Animated Archer","Thunder Mine","Weapon Enchantment Expertise",/* LVL 7 */"Weapon Enchantment Mastery"], //optional; choices the feature offers, if any.
				
				"arcane armament" : {
					name : "Arcane Armament",
					description : "\n   " + "I learn the mage armor spell and cast it at will." + "\n   " + "While under the effect of mage armor, my base AC becomes 14 + my Dexterity modifier, and I gain resistance to force damage.", //required;
					spellcastingBonus : {
						name : "Arcane Armament Upgrade",
						spells : ["mage armor"],
						selection : ["mage armor"],
						atwill : true, 
					},
				},
				
				"enhance attribute" : {
					name : "Enhance Attribute",
					description : "\n   " + "I can enhance a piece of non-magical jewelery with ability-boosting power." + "\n   " + "Adds +1 to any ability score, can exceed maximums. Can be taken twice.",
					},
				
				"shielding ring" : {
					name : "Shielding Ring",
					description : "\n   " + "I can enfuse a non-magical ring with powerfull magic. This ring can be used to cast shield without a spell slot. Recovers on any rest.",
				},
				
				"skill infusion" : {
					name : "Skill Infusion",
					description : "\n   " + "I can choose from Dueling, Archery or Great Weapons Master. Apply to Infused and Animated weapons.",
				},
				
				"soul saving bond" : {
					name : "Soul Saving Bond",
					description : "\n   " + "I set up a magical bond between me and another creature." + "\n   " + "When either fails a WIS, INT, CHA, or Deat hsaving throw, the other can roll and replace." + "\n   " + "Both creatures must take a short or long rest before next replacement. Bond can be set up with a new creature after a long rest.",
				},
				
				"triggered infusion" : {
					name : "Triggered Infusion",
					description : "\n   " + "I can now add a triggering event to my Store Magic feature. If the event occurs, I can spend my reaction to trigger the spell. Can be a verbal key.",
					action : ["reaction", ""]
				},
				
				"warding stone" : {
					name : "Warding Stone",
					description : "\n   " + "I can imbue an item temporary hit points equal to my Artificer level." + "\n   " + "Whoever is carrying this item gains these hitpoints, and they refresh when I take a long rest.",
				},
				
				"worn enchantment" : {
					name : "Worn Enchantment",
					description : "\n   " + "I can enchant and animate a worn item to assist me in a task." + "\n   " + "I can expend 1 spell slot to gain proficiency in a STR or DEX skill check until my next long rest." + "\n   " + "I can expend all of the item's magic to give me advantage on one check of that skill, ending the effect until my next long rest.",
				},
				
				"animated archer" : {
					name : "Animated Archer",
					description : "\n   " + "I can now animate ranged weapons, with their own quiver of 30 ammo." + "\n   " + "It can target anything in its range and move 30ft, taking an action to reload with more ammo.",
				},
				
				"thunder mine" : {
					name : "Thunder Mine",
					description : "\n   " + "I can infuse explosive magic in an item, with a trigger (rec. 5 ft). Casts shatter centred on the item." + "\n   " + "If a creature is within range of more than one mine during a turn, they take half damage after the first." + "\n   " + "Setting the mine is a 1 minute ritual, and explodes if moved. Only I can disarm it." + "\n   " + "I can set an amount equal to my intelligence modifier, refreshing at the end of a long rest. Existing mines lose magic.",
				},
				
				"weapon enchantment expertise" : {
					name : "Weapon Enchantment Expertise",
					description : "\n   " + "I learn the spell magical weapon, and at 9th level I learn the spell elemental weapon.When you cast magical weapon or elemental weapon, you can target a weapon that is already magical, adding to any effect the weapon already has." + "\n   " + "Additionally, when you have to make a Constitution saving throw to maintain concentration, you do so with advantage.",
					additional : ["magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon"],
					spellcastingBonus : [{
						name : "Weapon Enchantment Expertise",
						spells : "magical weapon",
						selection : "magical weapon",
					}, {
						name : "Weapon Enchantment Expertise",
						spells : "elemental weapon",
						selection : "elemental weapon",
					}]
				},
				
				"weapon enchantment mastery" : {
					name : "Weapon Enchantment Mastery",
					description : "\n   " + "When I cast the magical weapon spell, attacks made with the weapon score a critical hit on 19 or a 20 die roll, and the weapon deals force damage." + "\n   " + "When I cast elemental weapon, the additional damage dealt on hit is increased by an additional 1d4, and I can pick force as the damage type in addition to the other options.",
					prerequisite : "Weapon Enchantment Expertise"
				},
			},
			
			"subclassfeature8" : {
				name : "Specialization Upgrade 4",
				source : ["HB", 0],
				minlevel : 9,
				description : "\n   " + "Choose an upgrade using the \"Choose Feature\" button above",
				choices : ["Arcane Armament","Enhance Attribute","Shielding Ring","Skill Infusion","Soul Saving Bond","Triggered Infusion","Warding Stone","Worn Enchantment",/* LVL 5 */"Animated Archer","Thunder Mine","Weapon Enchantment Expertise",/* LVL 7 */"Weapon Enchantment Mastery",/* LVL 9 */"Alter Time Infusion","Dancing Fires","Detonate Armament","Spell Trapping Ring"], //optional; choices the feature offers, if any.
	
				"arcane armament" : {
					name : "Arcane Armament",
					description : "\n   " + "I learn the mage armor spell and cast it at will." + "\n   " + "While under the effect of mage armor, my base AC becomes 14 + my Dexterity modifier, and I gain resistance to force damage.",
					spellcastingBonus : {
						name : "Arcane Armament Upgrade",
						spells : ["mage armor"],
						selection : ["mage armor"],
						atwill : true,	
					},
				},
				
				"enhance attribute" : {
					name : "Enhance Attribute",
					description : "\n   " + "I can enhance a piece of non-magical jewelery with ability-boosting power." + "\n   " + "Adds +1 to any ability score, can exceed maximums. Can be taken twice.",
				},
				
				"shielding ring" : {
					name : "Shielding Ring",
					description : "\n   " + "I can enfuse a non-magical ring with powerfull magic. This ring can be used to cast shield without a spell slot. Recovers on any rest.",
				},
				
				"skill infusion" : {
					name : "Skill Infusion",
					description : "\n   " + "I can choose from Dueling, Archery or Great Weapons Master. Apply to Infused and Animated weapons.",
				},
				
				"soul saving bond" : {
					name : "Soul Saving Bond",
					description : "\n   " + "I set up a magical bond between me and another creature." + "\n   " + "When either fails a WIS, INT, CHA, or Deat hsaving throw, the other can roll and replace." + "\n   " + "Both creatures must take a short or long rest before next replacement. Bond can be set up with a new creature after a long rest.",
				},
				
				"triggered infusion" : {
					name : "Triggered Infusion",
					description : "\n   " + "I can now add a triggering event to my Store Magic feature. If the event occurs, I can spend my reaction to trigger the spell. Can be a verbal key.",
					action : ["reaction", ""]
				},
				
				"warding stone" : {
					name : "Warding Stone",
					description : "\n   " + "I can imbue an item temporary hit points equal to my Artificer level." + "\n   " + "Whoever is carrying this item gains these hitpoints, and they refresh when I take a long rest.",
				},
				
				"worn enchantment" : {
					name : "Worn Enchantment",
					description : "\n   " + "I can enchant and animate a worn item to assist me in a task." + "\n   " + "I can expend 1 spell slot to gain proficiency in a STR or DEX skill check until my next long rest." + "\n   " + "I can expend all of the item's magic to give me advantage on one check of that skill, ending the effect until my next long rest.",
				},
				
				"animated archer" : {
					name : "Animated Archer",
					description : "\n   " + "I can now animate ranged weapons, with their own quiver of 30 ammo." + "\n   " + "It can target anything in its range and move 30ft, taking an action to reload with more ammo.",
				},
				
				"thunder mine" : {
					name : "Thunder Mine",
					description : "\n   " + "I can infuse explosive magic in an item, with a trigger (rec. 5 ft). Casts shatter centred on the item." + "\n   " + "If a creature is within range of more than one mine during a turn, they take half damage after the first." + "\n   " + "Setting the mine is a 1 minute ritual, and explodes if moved. Only I can disarm it." + "\n   " + "I can set an amount equal to my intelligence modifier, refreshing at the end of a long rest. Existing mines lose magic.",
				},
				
				"weapon enchantment expertise" : {
					name : "Weapon Enchantment Expertise",
					description : "\n   " + "I learn the spell magical weapon, and at 9th level I learn the spell elemental weapon.When you cast magical weapon or elemental weapon, you can target a weapon that is already magical, adding to any effect the weapon already has." + "\n   " + "Additionally, when you have to make a Constitution saving throw to maintain concentration, you do so with advantage.",
					additional : ["magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon","magical weapon and elemental weapon"],
					spellcastingBonus : [{
						name : "Weapon Enchantment Expertise",
						spells : "magical weapon",
						selection : "magical weapon",
					}, {
						name : "Weapon Enchantment Expertise",
						minlevel : 9,
						spells : "elemental weapon",
						selection : "elemental weapon",
					}]
				},
				
				"alter time infusion" : {
					name : "Alter Time Infusion",
					description : "\n   " + "When I use my Store Magic feature, rather than picking a spell I know, I can cast haste or slow.",
				},
				
				"dancing fires" : {
					name : "Dancing Fires",
					description : "\n   " + "When I animate a weapon with my Animated Weapon feature, I can additionally imbue it with ethereal flames, causing it to deal 1d6 force damage on hit.",
				},
				
				"detonate armament" : {
					name : "Detonate Armament",
					description : "\n   " + "As a reaction to taking damage, I can end the effect of mage armor to cast thunder step without expending a spell slot." + "\n   " + "When I cast thunder step in this manner, it deals force damage instead of thunder damage. I regain this ability at the end of any rest.",
				},
				
				"spell trapping ring" : {
					name : "Spell Trapping Ring",
					description : "\n   " + "I can infuse a non-magical ring to cast counterspell without expending a spell slot. If I cast counterspell and it succeeds, the spell countered is stored in the ring." + "\n   " + "I can then cast the stored spell without expending a spell slot, but spell fades if it is not used before next long rest. I can use this ring again after a long rest.",
				},
			}
		}
	}
);