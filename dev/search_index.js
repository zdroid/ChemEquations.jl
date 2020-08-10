var documenterSearchIndex = {"docs":
[{"location":"lib/internals/#Internals","page":"Internals","title":"Internals","text":"","category":"section"},{"location":"lib/internals/","page":"Internals","title":"Internals","text":"info: Info\nThe following interfaces are used internally and as such aren't exported by ChemEquations. However, you can still access them with using ChemEquations: interfacename.","category":"page"},{"location":"lib/internals/","page":"Internals","title":"Internals","text":"Modules = [ChemEquations]\nPublic = false","category":"page"},{"location":"lib/internals/#ChemEquations.CHARGEREGEX","page":"Internals","title":"ChemEquations.CHARGEREGEX","text":"CHARGEREGEX\n\nRegex to match {...} charge string.\n\n\n\n\n\n","category":"constant"},{"location":"lib/internals/#ChemEquations.EQUALCHARS","page":"Internals","title":"ChemEquations.EQUALCHARS","text":"EQUALCHARS\n\nCharacters used to split a chemical equation into two sides. Source: https://github.com/SciML/Catalyst.jl/blob/master/src/reaction_network.jl#L56\n\n\n\n\n\n","category":"constant"},{"location":"lib/internals/#ChemEquations.PLUSREGEX","page":"Internals","title":"ChemEquations.PLUSREGEX","text":"PLUSREGEX\n\nRegex to split a chemical equation into compounds.\n\n\n\n\n\n","category":"constant"},{"location":"lib/internals/#ChemEquations.CompoundTuple","page":"Internals","title":"ChemEquations.CompoundTuple","text":"CompoundTuple\n\nType stored in ChemEquation.tuples.\n\n\n\n\n\n","category":"type"},{"location":"lib/internals/#ChemEquations.ElementTuple","page":"Internals","title":"ChemEquations.ElementTuple","text":"ElementTuple\n\nType stored in Compound.tuples.\n\n\n\n\n\n","category":"type"},{"location":"lib/internals/#ChemEquations._balance","page":"Internals","title":"ChemEquations._balance","text":"_balance(equation::ChemEquation) -> ChemEquation\n_balance(equation::ChemEquation, fractions::Any) -> ChemEquation\n\n\nWrapper function for balance.\n\n\n\n\n\n","category":"function"},{"location":"lib/internals/#ChemEquations._balancematrix-Tuple{Any}","page":"Internals","title":"ChemEquations._balancematrix","text":"_balancematrix(equation::Any) -> Any\n\n\nWrapper function for balancematrix.\n\n\n\n\n\n","category":"method"},{"location":"lib/internals/#ChemEquations._charge-Tuple{AbstractString}","page":"Internals","title":"ChemEquations._charge","text":"_charge(str::AbstractString) -> Int64\n\n\nExtracts charge from compound's string into a number of specified type.\n\n\n\n\n\n","category":"method"},{"location":"lib/internals/#ChemEquations._compoundtuples-Tuple{AbstractString,Type}","page":"Internals","title":"ChemEquations._compoundtuples","text":"_compoundtuples(str::AbstractString, T::Type) -> Array{_A,1} where _A\n\n\nExtracts compound tuples from equation's string.\n\n\n\n\n\n","category":"method"},{"location":"lib/internals/#ChemEquations._elementtuples-Tuple{AbstractString}","page":"Internals","title":"ChemEquations._elementtuples","text":"_elementtuples(str::AbstractString) -> Array{Tuple{String,Int64},1}\n\n\nExtracts element tuples from compound's string.\n\n\n\n\n\n","category":"method"},{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/#Textbook-exercises","page":"Examples","title":"Textbook exercises","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"Equations can be written conveniently, with many different forms supported. They are written as strings with ce prefix (chemical equation), similar to r prefix for regex in Julia.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> equation = ce\"Fe + Cl2 = FeCl3\"\nFe + Cl2 = FeCl3\n\njulia> balance(equation)\n2 Fe + 3 Cl2 = 2 FeCl3","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Parsing the input is insensitive to whitespace and to state symbols ((s), (l), (g), (aq)), so you don't have to be pedantic if you don't want to.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> balance(ce\"KMnO4+ HCl = KCl+MnCl2 +H2O + Cl2\")\n2 KMnO4 + 16 HCl = 2 KCl + 2 MnCl2 + 8 H2O + 5 Cl2\n\njulia> balance(ce\"Zn(s) + O2(g) = ZnO(s)\")\n2 Zn + O2 = 2 ZnO","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Parentheses (()), compounds written with * and electrical charges are all supported. Electron will be recognized if you write e, {-}, {-1} or {1-}. Charge is also supposed to be in any of those forms.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> balance(ce\"K4Fe(CN)6 + H2SO4 + H2O = K2SO4 + FeSO4 + (NH4)2SO4 + CO\")\nK4FeC6N6 + 6 H2SO4 + 6 H2O = 2 K2SO4 + FeSO4 + 3 N2H8SO4 + 6 CO\n\njulia> balance(ce\"Cr2O7{-2} + H{+} + {-} = Cr{+3} + H2O\")\nCr2O7{-2} + 14 H{+} + 6 e = 2 Cr{+3} + 7 H2O\n\njulia> balance(ce\"CuSO4*5H2O = CuSO4 + H2O\")\nCuSO9H10 = CuSO4 + 5 H2O","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Even the hardest exercises are in the reach:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> balance(ce\"K4Fe(CN)6 + KMnO4 + H2SO4 = KHSO4 + Fe2(SO4)3 + MnSO4 + HNO3 + CO2 + H2O\")\n10 K4FeC6N6 + 122 KMnO4 + 299 H2SO4 = 162 KHSO4 + 5 Fe2S3O12 + 122 MnSO4 + 60 HNO3 + 60 CO2 + 188 H2O","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Writing equations with a different equal sign is also possible (see ChemEquation(::AbstractString) for reference):","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> ce\"N2+O2⇌2NO\"\nN2 + O2 = 2 NO\n\njulia> ce\"H2 + O2 → H2O\"\nH2 + O2 = H2O","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Are two chemical equations identical? Let's find out:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> ce\"CH3CH2OH + O2 = CO2 + HOH\" == ce\"C2H5OH + O2 → H2O + CO2\"\ntrue","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"The syntax flexibility comes at no additional costs. Scroll down to Using unicode characters section for more interesting examples.","category":"page"},{"location":"examples/#Compounds","page":"Examples","title":"Compounds","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"The package also supports writing compounds, independent of an equation. The syntax is similar, just with cc prefix (chemical compound) instead of ce.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> cc\"CuSO4*5H2O\"\nCuSO9H10\n\njulia> cc\"H3O{+1}\"\nH3O{+}","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"As you could notice, input string is transformed so that every atom appears only once. You can use this to compare two compounds written in different forms:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> cc\"CH3CH2CH2CH2CH2OH\" == cc\"C5H12O\"\ntrue","category":"page"},{"location":"examples/#Using-unicode-characters","page":"Examples","title":"Using unicode characters","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"All unicode characters that are letters (such as α and β) or symbols (such as × and ÷) are supported in the input. That allows some exotic examples:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> ce\"Σ{+1} + Θ{-1} = Θ2 + Σ2\"\nΣ{+} + Θ{-} = Θ2 + Σ2","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"This works because compounds are parsed by elements, where an element begins with an uppercase unicode letter and ends with a lowercase unicode letter or a unicode symbol.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"info: Info\nAn element can also begin with a symbol if the symbol is the first character (e.g. \"⬡H\").","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"It's even more interesting to use unicode symbols that resemble chemical symbols. Examples of those are ⎔ (\\hexagon), ⬡ (varhexagon), ⬢ (\\varhexagonblack), ⌬ (\\varhexagonlrbonds) and ⏣ (\\benzenr).","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Unicode input allows writing some equations very nicely:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> ce\"⏣H + Cl2 = ⏣Cl + HCl\"\n⏣H + Cl2 = ⏣Cl + HCl\n\njulia> ce\"C + α = O + γ\" # a reaction from triple-α process\nC + α = O + γ","category":"page"},{"location":"examples/#Non-integer-coefficients","page":"Examples","title":"Non-integer coefficients","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"Sometimes coefficients in a chemical equation are written as fractions or decimals.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"To initialize such equation, you need to specify the appropriate Julia type for the coefficients. Rational or Rational{Int} is appropriate for exact fractions, while Float64 is appropriate for decimals.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> ChemEquation{Rational}(\"1//2 H2 + 1//2 Cl2 → HCl\")\n1//2 H2 = H\n\njulia> ChemEquation{Float64}(\"0.5 H2 + 0.5 Cl2 = HCl\")\n0.5 H2 + 0.5 Cl2 = HCl","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Previous two examples are equivalent (test it with ==!), thanks to the way that numbers are stored in Julia.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"You can also initialize the equation normally:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> eq = ce\"H2 + Cl2 → HCl\"\nH2 + Cl2 = HCl","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"and then choose to balance it with rational fractions as coefficients:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> balance(eq, fractions=true)\n1//2 H2 + 1//2 Cl2 = HCl","category":"page"},{"location":"examples/#Advanced-usage","page":"Examples","title":"Advanced usage","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"","category":"page"},{"location":"lib/public/#Public-Interface","page":"Public Interface","title":"Public Interface","text":"","category":"section"},{"location":"lib/public/","page":"Public Interface","title":"Public Interface","text":"Modules = [ChemEquations]\nPrivate = false\nOrder = [:module]","category":"page"},{"location":"lib/public/#ChemEquations.ChemEquations","page":"Public Interface","title":"ChemEquations.ChemEquations","text":"ChemEquations\n\nWrite and balance chemical equations elegantly and efficiently.\n\n\n\n\n\n","category":"module"},{"location":"lib/public/#Types","page":"Public Interface","title":"Types","text":"","category":"section"},{"location":"lib/public/","page":"Public Interface","title":"Public Interface","text":"Modules = [ChemEquations]\nPrivate = false\nOrder = [:type]","category":"page"},{"location":"lib/public/#ChemEquations.ChemEquation","page":"Public Interface","title":"ChemEquations.ChemEquation","text":"struct ChemEquation{T<:Real}\n\ntuples::Array{Tuple{Compound,T},1} where T<:Real\n\nStores chemical equation's compounds and their coefficients in a structured way.\n\n\n\n\n\n","category":"type"},{"location":"lib/public/#ChemEquations.ChemEquation-Union{Tuple{AbstractString}, Tuple{T}} where T<:Real","page":"Public Interface","title":"ChemEquations.ChemEquation","text":"ChemEquation(str::AbstractString) -> ChemEquation{Int64}\n\n\nConstructs a chemical equation from the given string. If no {Type} is provided, it defaults to Int.\n\nParsing is insensitive to whitespace. Any character in EQUALCHARS separates the equation into two sides, while + separates the equation into compounds.\n\nExamples\n\njulia> ChemEquation(\"N2+O2⇌2NO\")\nN2 + O2 = 2 NO\n\njulia> ChemEquation(\"CH3COOH + Na → H2 + CH3COONa\")\nC2H4O2 + Na = H2 + C2H3O2Na\n\njulia> ChemEquation(\"⏣H + Cl2 = ⏣Cl + HCl\")\n⏣H + Cl2 = ⏣Cl + HCl\n\njulia> ChemEquation{Rational}(\"1//2 H2 → H\")\n1//2 H2 = H\n\njulia> ChemEquation{Float64}(\"0.5 H2 + 0.5 Cl2 = HCl\")\n0.5 H2 + 0.5 Cl2 = HCl\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#ChemEquations.Compound","page":"Public Interface","title":"ChemEquations.Compound","text":"struct Compound\n\ntuples::Array{Tuple{String,Int64},1}\ncharge::Int64\n\nStores chemical compound's elements and charge in a structured way.\n\ninfo: Info\nElectron is stored as \"e\".\n\n\n\n\n\n","category":"type"},{"location":"lib/public/#ChemEquations.Compound-Tuple{AbstractString}","page":"Public Interface","title":"ChemEquations.Compound","text":"Compound(str::AbstractString) -> Compound\n\n\nConstructs a compound from str.\n\nAn element begins with an uppercase unicode letter and ends with a lowercase unicode letter or a unicode symbol.\n\ninfo: Info\nAn element can also begin with a symbol if the symbol is the first character (e.g. \"⬡H\").\n\nParsing is insensitive to whitespace and underscores (_), but also to state symbols ((s), (l), (g), (aq)). Special parsing is implemented for:\n\nparens (e.g. \"(CH3COO)2Mg\")\ncompounds with \"*\" (e.g. \"CuSO4 * 5H2O\")\nelectrons (\"e\")\n\nCharge is in the form \"{±n}\" or \"{n±}\". It is automatically deduced for electron (\"e\").\n\nExamples\n\njulia> Compound(\"H2O(s)\")\nH2O\n\njulia> Compound(\"H3O{+}\")\nH3O{+}\n\njulia> Compound(\"(CH3COO)2Mg\")\nC4H6O4Mg\n\njulia> Compound(\"CuSO4 * 5H2O\")\nCuSO9H10\n\njulia> Compound(\"⬡Cl\")\n⬡Cl\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Macros","page":"Public Interface","title":"Macros","text":"","category":"section"},{"location":"lib/public/","page":"Public Interface","title":"Public Interface","text":"Modules = [ChemEquations]\nPrivate = false\nOrder = [:macro]","category":"page"},{"location":"lib/public/#ChemEquations.@cc_str-Tuple{Any}","page":"Public Interface","title":"ChemEquations.@cc_str","text":"@cc_str\n\nConstructs a compound with cc\"str\" syntax, instead of Compound(str).\n\nExamples\n\njulia> cc\"H3O{+1}\"\nH3O{+}\n\n\n\n\n\n","category":"macro"},{"location":"lib/public/#ChemEquations.@ce_str-Tuple{Any}","page":"Public Interface","title":"ChemEquations.@ce_str","text":"@ce_str\n\nConstructs a chemical equation with ce\"str\" syntax, instead of ChemEquation(str).\n\nExamples\n\njulia> ce\"H2 + O2 → H2O\"\nH2 + O2 = H2O\n\n\n\n\n\n","category":"macro"},{"location":"lib/public/#Functions","page":"Public Interface","title":"Functions","text":"","category":"section"},{"location":"lib/public/","page":"Public Interface","title":"Public Interface","text":"Modules = [ChemEquations]\nPrivate = false\nOrder = [:function]","category":"page"},{"location":"lib/public/#Base.:==-Tuple{ChemEquation,ChemEquation}","page":"Public Interface","title":"Base.:==","text":"==(equation_1::ChemEquation, equation_2::ChemEquation) -> Any\n\n\nChecks whether two equations are chemically equal.\n\nExamples\n\njulia> ce\"H2 + O2 = H2O\" == ce\"O2 + H2 → H2O\"\ntrue\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Base.:==-Tuple{Compound,Compound}","page":"Public Interface","title":"Base.:==","text":"==(compound_1::Compound, compound_2::Compound) -> Bool\n\n\nChecks whether two compounds are chemically equal.\n\nExamples\n\njulia> cc\"MgOHOH\" == cc\"Mg(OH)2\"\ntrue\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Base.show-Tuple{IO,ChemEquation}","page":"Public Interface","title":"Base.show","text":"show(io::IO, equation::ChemEquation)\n\n\nDisplays the chemical equation using Base.string(::Compound).\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Base.show-Tuple{IO,Compound}","page":"Public Interface","title":"Base.show","text":"show(io::IO, compound::Compound)\n\n\nDisplays the compound using Base.string(::Compound).\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Base.string-Tuple{ChemEquation}","page":"Public Interface","title":"Base.string","text":"string(equation::ChemEquation) -> String\n\n\nCreates a string to represent the chemical equation.\n\nAll compounds are displayed with Base.string(::Compound), in the order in which they were originally given, with coefficients equal to 1 not displayed. '=' and '+' are used as separators, with spaces inserted for easier reading.\n\nExamples\n\njulia> string(ce\"Cr2O7{2-} + H{+} + {-} = Cr{3+} + H2O\")\n\"Cr2O7{-2} + H{+} + e = Cr{+3} + H2O\"\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Base.string-Tuple{Compound}","page":"Public Interface","title":"Base.string","text":"string(compound::Compound) -> String\n\n\nCreates a string to represent the compound.\n\nAll elements are displayed only once (e.g. \"H2O\" and not \"HOH\"), in the order in which they were originally given (e.g. \"MgO2H2\" from cc\"Mg(OH)2\"), with coefficients equal to 1 not displayed (e.g. \"H\" and not \"H1\").\n\nExamples\n\njulia> string(cc\"CuSO4 * 5 H2O\")\n\"CuSO9H10\"\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#ChemEquations.balance-Tuple{ChemEquation{var\"#s15\"} where var\"#s15\"<:(Union{Complex{S}, S} where S<:Integer)}","page":"Public Interface","title":"ChemEquations.balance","text":"balance(equation::ChemEquation{var\"#s15\"} where var\"#s15\"<:(Union{Complex{S}, S} where S<:Integer); fractions) -> ChemEquation\n\n\nBalances the coefficients of a chemical equation with integer coefficients.\n\nThe minimal integer solution is displayed by default. If fractions is true, they solution will be displayed as rational fractions instead.\n\nExamples\n\njulia> balance(ce\"Fe + Cl2 = FeCl3\", fractions=true)\nFe + 3//2 Cl2 = FeCl3\n\njulia> balance(ce\"Cr2O7{-2} + H{+} + {-} = Cr{+3} + H2O\")\nCr2O7{-2} + 14 H{+} + 6 e = 2 Cr{+3} + 7 H2O\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#ChemEquations.balance-Tuple{ChemEquation}","page":"Public Interface","title":"ChemEquations.balance","text":"balance(equation::ChemEquation) -> ChemEquation\n\n\nBalances the coefficients of a chemical equation. If the equation cannot be balanced, an error is thrown.\n\ninfo: Info\nThe original equation is not modified.\n\nExamples\n\njulia> balance(ce\"Fe + Cl2 = FeCl3\")\n2 Fe + 3 Cl2 = 2 FeCl3\n\njulia> balance(ChemEquation{Rational}(\"H2 + Cl2 = HCl\"))\n1//2 H2 + 1//2 Cl2 = HCl\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#ChemEquations.balancematrix-Tuple{ChemEquation}","page":"Public Interface","title":"ChemEquations.balancematrix","text":"balancematrix(equation::ChemEquation) -> Any\n\n\nBalances an equation matrix using the nullspace method. Returns an array in which each column represents a solution.\n\nReferences\n\nThorne (2009)\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#ChemEquations.balancematrix-Union{Tuple{ChemEquation{T}}, Tuple{T}} where T<:(Union{Complex{S}, S} where S<:Integer)","page":"Public Interface","title":"ChemEquations.balancematrix","text":"balancematrix(equation::ChemEquation{T<:(Union{Complex{S}, S} where S<:Integer)}; fractions) -> Any\n\n\nSame as balancematrix(::ChemEquation), but for a chemical equation with integer coefficients.\n\nBy default, the solutions of integer matrices are displayed as integers. If fractions is true, they will be displayed as rational fractions instead.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#ChemEquations.compounds-Tuple{ChemEquation}","page":"Public Interface","title":"ChemEquations.compounds","text":"compounds(equation::ChemEquation) -> Array{_A,1} where _A\n\n\nReturns chemical equation's compounds in a list.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#ChemEquations.elements-Tuple{ChemEquation}","page":"Public Interface","title":"ChemEquations.elements","text":"elements(equation::ChemEquation) -> Array{String,1}\n\n\nReturns chemical equation's unique elements.\n\nExamples\n\njulia> elements(ce\"2 H2 + O2 → 2 H2O\")\n2-element Array{String,1}:\n \"H\"\n \"O\"\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#ChemEquations.elements-Tuple{Compound}","page":"Public Interface","title":"ChemEquations.elements","text":"elements(compound::Compound) -> Array{String,1}\n\n\nReturns compound's elements as strings.\n\nExamples\n\njulia> elements(cc\"CH3COOH\")\n3-element Array{String,1}:\n \"C\"\n \"H\"\n \"O\"\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#ChemEquations.equationmatrix-Union{Tuple{ChemEquation{T}}, Tuple{T}} where T","page":"Public Interface","title":"ChemEquations.equationmatrix","text":"equationmatrix(equation::ChemEquation{T}) -> Array\n\n\nCreates an equation matrix in which rows correspond to atoms and columns correspond to compounds.\n\nExamples\n\njulia> equationmatrix(ce\"H2 + Cl2 → HCl\")\n2×3 Array{Int64,2}:\n 2  0  1\n 0  2  1\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#ChemEquations.hascharge-Tuple{ChemEquation}","page":"Public Interface","title":"ChemEquations.hascharge","text":"hascharge(equation::ChemEquation) -> Bool\n\n\nTrue if chemical equation has at least one compound with nonzero charge.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#ChemEquations.hascharge-Tuple{Compound}","page":"Public Interface","title":"ChemEquations.hascharge","text":"hascharge(compound::Compound) -> Bool\n\n\nTrue if the compound's charge is nonzero.\n\n\n\n\n\n","category":"method"},{"location":"#ChemEquations","page":"Home","title":"ChemEquations","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This is a Julia package for writing and balancing chemical equations. Its goal is to be both elegant and efficient.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Writing a chemical equation like this:","category":"page"},{"location":"","page":"Home","title":"Home","text":"CH_4 + O_2 to CO_2 + H_2 O","category":"page"},{"location":"","page":"Home","title":"Home","text":"should be as simple as this:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using ChemEquations\n\njulia> equation = ce\"CH4 + O2 = CO2 + H2O\"\nCH4 + O2 = CO2 + H2O","category":"page"},{"location":"","page":"Home","title":"Home","text":"and balancing it should be even easier:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> balance(equation)\nCH4 + 2 O2 = CO2 + 2 H2O","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can install the package by pressing ] in Julia REPL and typing:","category":"page"},{"location":"","page":"Home","title":"Home","text":"add ChemEquations","category":"page"}]
}
