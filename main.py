from collections import Counter
class MQ:
    def __init__(self, payload):
        self.terms = payload['num']
        self.binary = convert_terms(payload['num'], payload['nv'])
        self.binary_groups = set_groups(self.binary)
        self.expressions = []
        self.new_found = []
        self.final_groups = {}

    def get_final_groups(self):
        return self.expressions

    def merge(self):
        merge_groups(self.binary_groups, self.expressions)
        self.final_groups = final_term(essential(self.expressions), not_essential(self.expressions), self.expressions, self.new_found)
    def convert(self):
        return convert_to_boexp(remove_redundancy(self.final_groups['ver'], self.final_groups, self.new_found))

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

def set_groups(binary_string):
    stand = {'0': [], '1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], '8': []}
    group = list()

    for string in binary_string:
        counter = get_all_keys(string)
        stand[str(counter)].append(string)

    for m in stand:
        if (stand[m] != []):
            group.append(stand[m])

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
        for x in new_strings:
            if not x in expressions:
                expressions.append(x)


def convert_to_boexp(binary_expression):
    counter = 0
    fstring = ''
    for string in binary_expression:
        for x in enumerate(string):
            if(x[1] != '-'):
                if(x[0] == 0):
                    if(x[1] == '0'):
                        fstring = fstring + "A'"
                    else:
                        fstring = fstring + "A"
                elif(x[0] == 1):
                    if(x[1] == '0'):
                        fstring = fstring + "B'"
                    else:
                        fstring = fstring + "B"
                elif(x[0] == 2):
                    if(x[1] == '0'):
                        fstring = fstring + "C'"
                    else:
                        fstring = fstring + "C"
                elif(x[0] == 3):
                    if(x[1] == '0'):
                        fstring = fstring + "D'"
                    else:
                        fstring = fstring + "D"
                elif(x[0] == 4):
                    if(x[1] == '0'):
                        fstring = fstring + "E'"
                    else:
                        fstring = fstring + "E"
                elif(x[0] == 5):
                    if(x[1] == '0'):
                        fstring = fstring + "F'"
                    else:
                        fstring = fstring + "F"
                elif(x[0] == 6):
                    if(x[1] == '0'):
                        fstring = fstring + "G'"
                    else:
                        fstring = fstring + "G"
                elif(x[0] == 7):
                    if(x[1] == '0'):
                        fstring = fstring + "H'"
                    else:
                        fstring = fstring + "H"
        counter += 1
        if(counter < len(binary_expression)):
            fstring = fstring + ' + '
    return fstring


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

    for v in list(set(not_unique) - set(completo)):
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

