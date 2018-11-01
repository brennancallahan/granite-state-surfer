# require 'rails_helper'
#
# feature "visitor sees a list of surf breaks" do
#   scenario "sees a list of breaks on the index page" do
#     surf_spot = Break.create( name: 'Surf Spot', beach: 'Surf Beach', address: '123 beach street, Surf City, NH 03862', break_group_id: 2, beginner_friendly: true, onsite_parking: false, break_type: 'Beach Break' )
#     wave_spot = Break.create( name: 'Wave Spot', beach: 'Wave Beach', address: '123 wave street, Surf City, NH 03862', break_group_id: 2, beginner_friendly: false, onsite_parking: true, break_type: 'Reef Break' )
#
#     visit root_path
#
#     expect(page).to have_content "Surf Spot"
#     expect(page).to have_content "Wave Spot"
#
#   end
# end
