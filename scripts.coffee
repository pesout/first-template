###
************************
Created by Stepan Pesout
*****www.pesout.eu******
*****@stepanpesout******
************************
###

i = document.documentElement.clientWidth
b = undefined
c = undefined
a = i / 4
z = 0
f = undefined
g = undefined
e = i / 4
h = undefined
j = i / 4
k = undefined
l = undefined
m = i / 4
n = undefined
o = i / 2
p = undefined
q = undefined
r = i / 4
s = 0

prvnizmena = ->
  if z != 0
    clearInterval c
  z = z + 1
  document.getElementById('prvnipole').style.zIndex = '12'
  b = setInterval((->
    prvnipohyb()
    return
  ), 5)
  return

prvnizpet = ->
  clearInterval b
  document.getElementById('prvnipole').style.zIndex = '10'
  c = setInterval((->
    prvnipohybzpatky()
    return
  ), 5)
  return

prvnipohyb = ->
  if Math.round(a) != Math.round(i / 4 + i / 30)
    a = a + 0.5
    document.getElementById('prvnipole').style.width = a
  return

prvnipohybzpatky = ->
  if Math.round(a) != Math.round(i / 4)
    a = a - 0.5
    document.getElementById('prvnipole').style.width = a
  else
    document.getElementById('prvnipole').style.zIndex = '8'
    clearInterval c
  return

###-------------------------------------------------------------------------------------------------###

druhezmena = ->
  if h != 0
    clearInterval g
  h = h + 1
  document.getElementById('druhepole').style.zIndex = '12'
  f = setInterval((->
    druhepohyb()
    return
  ), 5)
  return

druhezpet = ->
  clearInterval f
  document.getElementById('druhepole').style.zIndex = '10'
  g = setInterval((->
    druhepohybzpatky()
    return
  ), 5)
  return

druhepohyb = ->
  if Math.round(e) != Math.round(i / 4 + i / 30 + i / 30)
    e = e + 1
    j = j - 0.5
    document.getElementById('druhepole').style.width = e
    document.getElementById('druhepole').style.left = j
  return

druhepohybzpatky = ->
  if Math.round(e) != Math.round(i / 4)
    e = e - 1
    j = j + 0.5
    document.getElementById('druhepole').style.width = e
    document.getElementById('druhepole').style.left = j
  else
    document.getElementById('druhepole').style.zIndex = '8'
    clearInterval g
  return

###--------------------------------------------------------------------------------------------------###

tretizmena = ->
  if n != 0
    clearInterval l
  n = n + 1
  document.getElementById('tretipole').style.zIndex = '12'
  k = setInterval((->
    tretipohyb()
    return
  ), 5)
  return

tretizpet = ->
  clearInterval k
  document.getElementById('tretipole').style.zIndex = '10'
  l = setInterval((->
    tretipohybzpatky()
    return
  ), 5)
  return

tretipohyb = ->
  if Math.round(m) != Math.round(i / 4 + i / 30 + i / 30)
    m = m + 1
    o = o - 0.5
    document.getElementById('tretipole').style.width = m
    document.getElementById('tretipole').style.left = o
  return

tretipohybzpatky = ->
  if Math.round(m) != Math.round(i / 4)
    m = m - 1
    o = o + 0.5
    document.getElementById('tretipole').style.width = m
    document.getElementById('tretipole').style.left = o
  else
    document.getElementById('tretipole').style.zIndex = '8'
    clearInterval l
  return

###-------------------------------------------------------------------------------------------------###

ctvrtezmena = ->
  if s != 0
    clearInterval q
  s = s + 1
  document.getElementById('ctvrtepole').style.zIndex = '12'
  p = setInterval((->
    ctvrtepohyb()
    return
  ), 5)
  return

ctvrtezpet = ->
  clearInterval p
  document.getElementById('ctvrtepole').style.zIndex = '10'
  q = setInterval((->
    ctvrtepohybzpatky()
    return
  ), 5)
  return

ctvrtepohyb = ->
  if Math.round(r) != Math.round(i / 4 + i / 30)
    r = r + 0.5
    document.getElementById('ctvrtepole').style.width = r
  return

ctvrtepohybzpatky = ->
  if Math.round(r) != Math.round(i / 4)
    r = r - 0.5
    document.getElementById('ctvrtepole').style.width = r
  else
    document.getElementById('ctvrtepole').style.zIndex = '8'
    clearInterval q
  return

###-------------------------------------------------------------------------------------------------###

ctzmena = ->
  document.getElementById('ctverecek').style.width = '100%'
  return

ctzpet = ->
  document.getElementById('ctverecek').style.width = '45'
  return

###-------------------------------------------------------------------------------------------------###

nacti = ->
  document.getElementById('druhepole').style.width = document.documentElement.clientWidth / 4 + 8
  setTimeout 'zobraz();', 500
  return

zobraz = ->
  document.getElementById('hlavnistrana').style.zIndex = 6
  document.getElementById('logo_pruh').style.zIndex = 6
  return

if !document.getElementById and document.all
  document.getElementById = document.all
