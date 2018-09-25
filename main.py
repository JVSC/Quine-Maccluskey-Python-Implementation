from collections import Counter


def get_all_keys(string):
    counter = 0
    counter += string['exp'].count('1')
    counter += string['exp'].count('x')
    return counter


def compare_terms(member_of_first, member_of_second):
    keys_of_first = get_all_keys(member_of_first)
    keys_of_second = get_all_keys(member_of_second)
    missing = [i for i in range(len(member_of_second['exp']))
               if member_of_second['exp'][i] != member_of_first['exp'][i]]
    return missing


def replace(member_of_second, member_of_first, replace_at):
    new_term = {'exp': '', 'unique': 0, 'minterms': [], 'pass': False}

    if (len(replace_at) > 1):
        return 0
    for x in replace_at:

        if(member_of_second['exp'][x] != '-'):
            new_str = member_of_second['exp'][:x] + \
                '-' + member_of_second['exp'][x+1:]
            new_term['exp'] = new_str
            new_term['minterms'].extend(member_of_second['minterms'])
            new_term['minterms'].extend(member_of_first['minterms'])
            member_of_second['unique'] = 1
            member_of_first['unique'] = 1
            return new_term
    return 0


def convert_terms(terms, n_variables):

    binary_string = []

    for term in terms:
        your_list = '{:b}'.format(term)
        binary_string.append({'exp': your_list.zfill(
            n_variables), 'unique': 0, 'minterms': [term], 'pass': False})
    return binary_string


def read_terms(t):
    nv = input('Numero de variaveis: ')
    terms = []
    op = 1

    print('\nDigite os termos validos (-1 para parar)\n')

    while(op != -1):
        op = int(input())
        if (op != -1):
            terms.append(op)
    t = terms
    binary = convert_terms(terms, int(nv))
    return binary


def set_groups(binary_string):
    print("\n==========================")
    print("Agrupando elementos...")
    stand = {'0': [], '1': [], '2': [], '3': [], '4': []}
    group = list()

    for string in binary_string:
        counter = get_all_keys(string)
        stand[str(counter)].append(string)

    for m in stand:
        if (stand[m] != []):
            group.append(stand[m])
    print("--------------------------")
    print("######### Grupos #########")
    counter = 0
    for members in group:
        print(f"-> Grupo {counter+1}: ", end=' ')
        for member in members:
            print(f"{member['exp']} contem: {member['minterms']}", end=' ')
        print('')
        counter += 1
    print("==========================")

    return group


def merge_groups(binary_matrix, expressions):
    size_of_groups = len(binary_matrix)
    check = 0
    new_strings = []

    for index, value in enumerate(binary_matrix):  # START FOR 1
        for member_of_first in binary_matrix[index]:  # START FOR 2
            if (index + 1 < size_of_groups):
                for member_of_second in binary_matrix[index+1]:  # START FOR 3
                    replace_at = compare_terms(
                        member_of_first, member_of_second)
                    resultado = replace(
                        member_of_second, member_of_first, replace_at)
                    if(resultado):
                        new_strings.append(resultado)
                        check = 1

    for index, value in enumerate(binary_matrix):  # START FOR 1
        for member in binary_matrix[index]:  # START FOR 2
            if (not member['unique']):
                new_strings.append(member)

    if (check):
        merge_groups(set_groups(new_strings), expressions)
    else:
        print("Acabamos!")
        print("Retornando valores...")
        for x in new_strings:
            if not x in expressions:
                expressions.append(x)


def convert_to_boexp(binary_expression):
    counter = 0
    for string in binary_expression:
        for x in enumerate(string):
            if(x[1] != '-'):
                if(x[0] == 0):
                    if(x[1] == '0'):
                        print("A'", end='')
                    else:
                        print('A', end='')
                elif(x[0] == 1):
                    if(x[1] == '0'):
                        print("B'", end='')
                    else:
                        print('B', end='')
                elif(x[0] == 2):
                    if(x[1] == '0'):
                        print("C'", end='')
                    else:
                        print('C', end='')
                elif(x[0] == 3):
                    if(x[1] == '0'):
                        print("D'", end='')
                    else:
                        print('D', end='')
        print(" + ", end='')
        counter += 1
    print('')


def essential(expressions):
    counter = []
    essential = []

    for term in expressions:
        counter.extend(term['minterms'])
    counting = Counter(counter)

    for x in counting:
        if (counting[x] == 1):
            essential.append(x)

    return essential


def not_essential(expressions):
    counter = []
    essential = []

    for term in expressions:
        counter.extend(term['minterms'])
    counting = Counter(counter)

    for x in counting:
        if (counting[x] != 1):
            essential.append(x)

    return essential


def final_term(unique, not_unique, expressions, newly):
    final_term = []
    retorno = []
    checker = []
    completo = []

    for only in unique:
        for term in expressions:
            if only in term['minterms'] and not term['exp'] in retorno:
                term['pass'] = True
                retorno.append(
                    {'expression': term['exp'], 'minterm': term['minterms']})
                completo.extend(term['minterms'])
                newly.append({'minterm':term['minterms'], 'expression':term['exp']})

    missing = list(set(not_unique) - set(completo))
    if (missing):
        print("AVISO: TERMO(S) EXCEDENTE(S) ENCONTRADO(S)")
    for v in missing:
        for term in expressions:
            if v in term['minterms'] and not term['pass']:
                term['pass'] = True
                retorno.append(
                    {'expression': term['exp'], 'minterm': term['minterms']})
                completo.extend(term['minterms'])
                checker.append(term['minterms'])
                break
    return {'final': retorno, 'ver': checker}

def unique_groups(groups):
    
    for minterms in groups:
        check = len(minterms)
        for value in minterms:
            for minterms2 in groups:
                if value in minterms2 and not minterms is minterms2:
                    check = check - 1
                    break

        if (check <= 0):
            groups.remove(minterms)
            unique_groups(groups)
            return

def double_redundancy(haysack):
    for needle in haysack:
        check = len(needle['minterm'])
        for val in needle['minterm']:
            for needle2 in haysack:
                if val in needle2['minterm'] and not needle is needle2:
                    check = check - 1
                    break

        if (check <= 0):
            haysack.remove(needle)
            double_redundancy(haysack)
            return

def remove_redundancy(needles, haysack, newly):
    temp = []
    if (needles):
        for needle in needles:
            for hay in haysack['final']:
                if needle is hay['minterm']:
                    newly.append(hay)
                    break
    double_redundancy(newly)
    for val in newly:
        temp.append(val['expression'])
    return temp
    
expressions = []
terms = []
newly = []
merge_groups(set_groups(read_terms(terms)), expressions)
groups = final_term(essential(expressions),
                    not_essential(expressions), expressions, newly)
unique_groups(groups['ver'])

print('===========================================')
convert_to_boexp(remove_redundancy(groups['ver'], groups, newly)
)
print('===========================================')
