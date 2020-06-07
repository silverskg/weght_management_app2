class GraphsController < ApplicationController
  def index
    gon.weight_records = Graph.chart_data(current_user)
  end
end
